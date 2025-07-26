import Navbar from "./components/Navbar";
import Hero from "./features/Hero/Hero";
import About from "./features/About/About";
import Skills from "./features/Skills/Skills";
import Projects from "./features/Projects/Projects";
import Contact from "./features/Contact/Contact";
import Footer from "./components/Footer";
import ExperienceSection from "./features/Experience/Experience";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
export default App;