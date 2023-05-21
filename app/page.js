import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import SphereGeometry from "@/components/SphereGeometry";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <>
      <div className='h-screen'>
        <Hero />
        <Intro />
        <About />
        <Expertise />
        <Contact />
        <Work />
      </div>
    </>
  );
}
