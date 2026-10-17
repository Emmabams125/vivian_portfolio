import Header from "./components/Header";
import { FeaturedCaseStudy, HomeStory, Services } from "./components/Home";

export default function HomePage() {
  return (
    <>
      <Header />
      <HomeStory />
      <Services />
      <FeaturedCaseStudy />
    </>
  );
}
