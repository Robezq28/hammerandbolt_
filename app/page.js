import NavBar from "@/components/NavBar";
import Sphere from "@/components/Sphere";
import SphereGeometry from "@/components/SphereGeometry";

export default function Home() {
  return (
    <>
      <div className='h-screen'>
        <NavBar />
        <SphereGeometry />
      </div>
    </>
  );
}
