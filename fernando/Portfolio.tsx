import Home from "./sections/Home";
import NavBar from "./components/NavBar";
import AboutMe from "./sections/AboutMe";
import Technologies from "./sections/Technologies";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Portfolio() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <>
      <NavBar />

      <Home />

      <AboutMe />

      <Technologies />
    </>
  )
}

export default Portfolio;
