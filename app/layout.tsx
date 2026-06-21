import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const display = Poppins({
  variable: "--font-display-src",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body-src",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zion Miami",
    template: "%s · Zion Miami",
  },
  description:
    "Zion Miami — a church living out the supernatural of God in the heart of Miami.",
  metadataBase: new URL("https://zionmiami.org"),
  openGraph: {
    title: "Zion Miami",
    description: "A church living out the supernatural of God in the heart of Miami.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body id="top" className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
