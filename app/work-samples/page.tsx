import type { Metadata } from "next";
import WorkSamples from "../components/WorkSamples";

export const metadata: Metadata = {
  title: "Work Samples",
  description: "Landing page copy, email campaigns, advertising copy and video scripts written by Vivian Nwije.",
};

export default function WorkSamplesPage() {
  return <WorkSamples />;
}
