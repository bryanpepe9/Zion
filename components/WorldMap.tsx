"use client";

import { useEffect, useRef, useState } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import { t, type Locale } from "@/lib/i18n";
import { countries } from "@/content/locations";

const SVGNS = "http://www.w3.org/2000/svg";
const NW = 1000;
const PADX = 6;
const PADY = 12;
const ANTARCTICA = "010";

const ACTIVE = new Set(countries.map((c) => c.id));

// Augment each city with a stable global index (gi) used to link map ↔ list.
let _gi = 0;
const COUNTRY_CITIES = countries.map((c) => ({
  ...c,
  cities: c.cities.map((city) => ({ ...city, gi: _gi++ })),
}));

interface FlatCity {
  name: string;
  lat: number;
  lng: number;
  hub: boolean;
  gi: number;
}
const CITIES: FlatCity[] = COUNTRY_CITIES.flatMap((c) =>
  c.cities.map((city) => ({
    name: city.name,
    lat: city.lat,
    lng: city.lng,
    hub: !!city.hub,
    gi: city.gi,
  }))
);

function el(name: string, attrs: Record<string, string | number> = {}): SVGElement {
  const node = document.createElementNS(SVGNS, name);
  for (const k in attrs) node.setAttribute(k, String(attrs[k]));
  return node;
}

export default function WorldMap({ locale }: { locale: Locale }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null); // active gi
  const refs = useRef<Map<number, { mk: SVGElement; label: SVGElement }>>(
    new Map()
  );

  // Build the SVG once.
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let cancelled = false;

    (async () => {
      let topo: { objects: { countries: unknown } };
      try {
        const res = await fetch("/data/countries-110m.json");
        topo = await res.json();
      } catch (e) {
        console.warn("World map data failed to load:", e);
        return;
      }
      if (cancelled) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const all = (feature(topo as any, (topo as any).objects.countries) as any)
        .features as Array<{ id: string }>;
      const land = all.filter((f) => f.id !== ANTARCTICA);
      const fc = { type: "FeatureCollection", features: land };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const projection = geoNaturalEarth1().fitWidth(NW - PADX * 2, fc as any);
      const path = geoPath(projection);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const [[bx0, by0], [bx1, by1]] = path.bounds(fc as any);
      const vbX = bx0 - PADX;
      const vbY = by0 - PADY;
      const vbW = bx1 - bx0 + PADX * 2;
      const vbH = by1 - by0 + PADY * 2;

      const svg = el("svg", {
        class: "zmap__svg",
        viewBox: `${vbX.toFixed(1)} ${vbY.toFixed(1)} ${vbW.toFixed(1)} ${vbH.toFixed(1)}`,
        preserveAspectRatio: "xMidYMid meet",
        role: "img",
        "aria-label": "World map showing the Zion Church global network",
      });

      // Land
      const gLand = el("g", { class: "zmap__land" });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      land.forEach((f: any) => {
        const p = el("path", { d: path(f) || "" });
        p.setAttribute(
          "class",
          ACTIVE.has(f.id) ? "zmap__country zmap__country--active" : "zmap__country"
        );
        gLand.appendChild(p);
      });
      svg.appendChild(gLand);

      // Markers and a separate top label layer (so a dot never covers a label).
      const gMarks = el("g", { class: "zmap__marks" });
      const gLabels = el("g", { class: "zmap__labels" });
      const map = new Map<number, { mk: SVGElement; label: SVGElement }>();

      [...CITIES].sort((a, b) => Number(a.hub) - Number(b.hub)).forEach((c) => {
        const pt = projection([c.lng, c.lat]);
        if (!pt) return;
        const [x, y] = pt;

        const g = el("g", {
          class: "zmap__mk" + (c.hub ? " zmap__mk--hub" : ""),
          transform: `translate(${x.toFixed(1)} ${y.toFixed(1)})`,
        });
        g.dataset.gi = String(c.gi);
        if (c.hub) g.appendChild(el("circle", { class: "zmap__beacon", r: 9 }));
        g.appendChild(el("circle", { class: "zmap__ring", r: c.hub ? 6 : 5 }));
        g.appendChild(el("circle", { class: "zmap__dot", r: c.hub ? 4.2 : 2.6 }));
        g.addEventListener("mouseenter", () => setActive(c.gi));
        g.addEventListener("mouseleave", () => setActive(null));
        gMarks.appendChild(g);

        // Label lives in the top layer, positioned above the dot.
        const label = el("text", {
          class: "zmap__label" + (c.hub ? " zmap__label--hub" : ""),
          x: x.toFixed(1),
          y: (y - (c.hub ? 12 : 9)).toFixed(1),
          "text-anchor": "middle",
        });
        label.textContent = c.name;
        gLabels.appendChild(label);

        map.set(c.gi, { mk: g, label });
      });
      svg.appendChild(gMarks);
      svg.appendChild(gLabels);

      mount.innerHTML = "";
      mount.appendChild(svg);
      refs.current = map;
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // Highlight + reveal label for the single active city only.
  useEffect(() => {
    refs.current.forEach(({ mk, label }, gi) => {
      const on = gi === active;
      mk.classList.toggle("is-active", on);
      label.classList.toggle("is-visible", on);
    });
  }, [active]);

  return (
    <div>
      {/* Full-bleed map */}
      <div className="zmap" ref={mountRef} />

      {/* Locations below the map — each city is individually hoverable */}
      <div className="container-zion mt-10 md:mt-14">
        <ul className="grid grid-cols-2 gap-x-8 gap-y-7 border-t border-line pt-10 sm:grid-cols-3 lg:grid-cols-5">
          {COUNTRY_CITIES.map((c) => (
            <li key={c.key}>
              <span className="block font-display text-lg text-cream">
                {t(c.name, locale)}
              </span>
              <p className="mt-2 text-xs leading-relaxed text-cream/55">
                {c.cities.map((city, j) => (
                  <span key={city.gi}>
                    {j > 0 && <span className="text-cream/30"> · </span>}
                    <span
                      onMouseEnter={() => setActive(city.gi)}
                      onMouseLeave={() => setActive(null)}
                      className={`cursor-default transition-colors ${
                        city.hub
                          ? "font-medium text-emerald"
                          : active === city.gi
                            ? "text-emerald"
                            : "hover:text-cream"
                      }`}
                    >
                      {city.hub && (
                        <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald align-middle shadow-[0_0_8px_rgba(45,212,191,0.95)]" />
                      )}
                      {city.name}
                      {city.hub && (
                        <span className="ml-1 align-middle text-[10px] uppercase tracking-wider text-emerald/80">
                          · you are here
                        </span>
                      )}
                    </span>
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
