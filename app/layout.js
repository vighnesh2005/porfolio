import { Bebas_Neue, Tinos, Climate_Crisis, Great_Vibes, Rock_Salt } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const tinos = Tinos({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-tinos",
});

const climate = Climate_Crisis({
  subsets: ["latin"],
  variable: "--font-climate",
});

export const metadata = {
  title: "Vighnesh Prasad | Full Stack Developer",
  description: "Bold. Dark. Typographic. A showcase of engineering and design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${tinos.variable} ${climate.variable}`}>
      <head>
        {/* Fallback/Extra fonts requested by user */}
        <link href="https://fonts.googleapis.com/css2?family=Faculty+Glyphic&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-white">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
