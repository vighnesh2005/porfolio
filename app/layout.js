import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";
import Particles from "@/components/Particles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vighnesh Prasad | Portfolio",
  description: "A Starry Night inspired portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Great+Vibes&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Great+Vibes&family=Rock+Salt&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased 
        bg-[#0B1026] text-[#F2E8C9] selection:bg-[#F5D04C] selection:text-[#05070A] overflow-x-hidden`}
      >
        <Particles count={100} color="#F5D04C" />
        {children}
      </body>
    </html>
  );
}
