import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Education from "./components/Eaducation";
import Skills from "./components/Skill";
import Project from "./components/Project";
import Certifications from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
   <Header/>
  
   <HeroSection/>
   <AboutMe/>
   <Education/>
 <Skills/>
 <Project/>
 <Certifications/>
 <Contact/>
 <Footer/>

   </>
  );
}
