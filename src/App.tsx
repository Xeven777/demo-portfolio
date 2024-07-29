import ReactLenis from "lenis/react";
import MainHero from "./components/MainHero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <>
      <ReactLenis root>
        <Navbar />
        <MainHero />
        <Projects />
        <Testimonials />
        <Footer />
      </ReactLenis>
    </>
  );
}

export default App;
