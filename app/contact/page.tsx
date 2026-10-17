import type { Metadata } from "next";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vivian Nwije by email or LinkedIn.",
};

export default function ContactPage() {
  // Web3Forms keys are meant to be used from the browser, so passing it to the form is safe
  return <Contact web3formsKey={process.env.WEB3FORMS_KEY} />;
}
