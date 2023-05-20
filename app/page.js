import Overlay from "@/components/Overlay";
import SphereGeometry from "@/components/SphereGeometry";

export default function Home() {
  return (
    <>
      <div className='h-screen'>
        <Overlay />
        <SphereGeometry />
      </div>
    </>
  );
}
