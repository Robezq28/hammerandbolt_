import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
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
        <Work />
        <Contact />
      </div>
    </>
  );
}
