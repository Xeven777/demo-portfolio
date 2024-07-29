import ReactLenis from "lenis/react";
import MainHero from "./components/MainHero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
// import ThemeTogglebutton from "./components/ui/theme-togggle";

function App() {
  return (
    <>
      <ReactLenis root>
        {/* <div className="fixed top-2 right-6">
        <ThemeTogglebutton />
      </div> */}
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
