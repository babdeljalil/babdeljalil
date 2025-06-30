import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main className="w-[820px] max-md:px-6">
      <Header />
      <Hero />
      <Projects />
      <Portfolio />
      <Footer />
    </main>
  );
}
