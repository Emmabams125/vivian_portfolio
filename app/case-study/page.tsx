import type { Metadata } from "next";
import CaseStudy from "../components/CaseStudy";

export const metadata: Metadata = {
  title: "Case Study: Benva",
  description: "How Vivian Nwije marketed Benva, an early-stage tailoring management app: messaging, content, paid Meta ads and direct outreach.",
};

export default function CaseStudyPage() {
  return <CaseStudy />;
}
