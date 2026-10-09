'use client';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import CaseStudies from "./components/CaseStudies";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Skills />
      <CaseStudies />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
