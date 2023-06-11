"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  PerspectiveCamera,
  Html,
} from "@react-three/drei";
import { TextureLoader } from "three";
import { useRef } from "react";

const RotatingSphere = () => {
  const sphereRef = useRef();

  const albedoTexture = useLoader(
    TextureLoader,
    "/images/MetalCorrodedHeavy001_COL_1K_METALNESS.jpg"
  );
  const roughnessTexture = useLoader(
    TextureLoader,
    "/images/MetalCorrodedHeavy001_ROUGHNESS_1K_METALNESS.jpg"
  );
  const metalnessTexture = useLoader(
    TextureLoader,
    "/images/MetalCorrodedHeavy001_METALNESS_1K_METALNESS.jpg"
  );
  const normalTexture = useLoader(
    TextureLoader,
    "/images/MetalCorrodedHeavy001_NRM_1K_METALNESS.jpg"
  );
  const aoTexture = useLoader(
    TextureLoader,
    "/images/MetalCorrodedHeavy001_DISP_1K_METALNESS.jpg"
  );

  useFrame(() => {
    sphereRef.current.rotation.y += 0.0009; // Slower rotation
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} position={[0, 0, 0]}>
      <meshStandardMaterial
        attach='material'
        map={albedoTexture}
        roughnessMap={roughnessTexture}
        metalnessMap={metalnessTexture}
        normalMap={normalTexture}
        aoMap={aoTexture}
      />
    </Sphere>
  );
};

const SphereGeometry = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      <ambientLight intensity={0.7} color='yellow' />
      <spotLight
        position={[10, 10, 10]}
        color='green'
        angle={0.15}
        penumbra={1}
        intensity={0.5}
      />
      <pointLight position={[-10, -10, -10]} color='red' intensity={0.5} />
      <RotatingSphere />
      <Html position={[0, 0, 0]} center>
          <div>
            <h2 className='text-neutral-300 text-6xl md:text-8xl xl:text-9xl font-medium mb-2'>
              From coffee
            </h2>
            <h2 className='text-neutral-300 text-6xl md:text-8xl xl:text-9xl font-medium mb-2'>
              sips
              <span className='text-red-500'>...</span>
            </h2>
            <h2 className='text-neutral-300 text-6xl md:text-8xl xl:text-9xl font-medium mb-2 sm:mb-0 sm:mr-4'>
              to website
            </h2>
            <h2 className='text-neutral-300 text-6xl md:text-8xl xl:text-9xl font-medium mb-2 sm:mb-0 sm:mr-4'>
              hits<span className='text-red-500 animate-pulse'>_</span>
            </h2>
          </div>
s      </Html>
    </Canvas>
  );
};

export default SphereGeometry;
