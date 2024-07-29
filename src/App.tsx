import ReactLenis from "lenis/react";
import MainHero from "./components/MainHero";
import Navbar from "./components/Navbar";
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
        
      </ReactLenis>
    </>
  );
}

export default App;
