import About from "@/components/About";
import Hero from "@/components/Hero";
import SphereGeometry from "@/components/SphereGeometry";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <div className='h-screen'>
        <Hero />
        <About />
        <Work />
      </div>
    </>
  );
}
