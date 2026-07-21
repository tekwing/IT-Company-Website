import Hero from "../sections/Hero/Hero";
import Services from "../sections/Services/Services";
import Expertise from "../sections/Expertise/Expertise";
import Project from "../sections/Project/Project";
import About from "../sections/About/About";
import Contact from "../sections/ContactUs/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Project />
      <Expertise />
      <About />
      <Contact />
    </>
  );
}

export default Home;