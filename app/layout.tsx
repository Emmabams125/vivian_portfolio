import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit-family",
});

const ovo = Ovo({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ovo-family",
});

export const metadata: Metadata = {
  title: "Vivian Nwije - Marketing Strategist",
  description: "Portfolio of Vivian Nwije, a marketing strategist specializing in product marketing, growth and content.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} h-full antialiased leading-8 overflow-x-hidden bg-white text-gray-800`}>{children}</body>
    </html>
  );
}
