import NavBar from "@/components/NavBar";
import SphereGeometry from "@/components/SphereGeometry";
import TorusKnotGeometry from "@/components/TorusKnotGeometry";

export default function Home() {
  return (
    <>
      <div className=' h-screen'>
        <NavBar />
        <SphereGeometry />
      </div>
    </>
  );
}
