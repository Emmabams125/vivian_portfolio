import type { Metadata } from "next";
import About from "../components/About";

export const metadata: Metadata = {
  title: "About",
  description: "About Vivian Nwije: marketing strategist focused on product positioning, content and early-stage user acquisition.",
};

export default function AboutPage() {
  return <About />;
}
