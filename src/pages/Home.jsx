import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      
      <Footer />
    </div>
  );
};

export default Home;
