import type { Metadata } from "next";
import Experience from "../components/Experience";

export const metadata: Metadata = {
  title: "Experience & Education",
  description: "Vivian Nwije's professional experience and education.",
};

export default function ExperiencePage() {
  return <Experience />;
}
