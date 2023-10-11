import About from "./components/sections/About";
import CaseStudies from "./components/sections/CaseStudies";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <>
      <div className="text-textPrimary font-montserrat">
        <Navbar />
        <Hero />
        <CaseStudies />
        <Skills />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
