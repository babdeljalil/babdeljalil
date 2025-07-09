import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Portfolio />
      <Footer />
    </>
  );
}
