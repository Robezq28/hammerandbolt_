"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, TorusKnot, Sphere } from "@react-three/drei";
import { TextureLoader } from "three";
import { useRef } from "react";

const RotatingTorusKnot = () => {
  const torusKnotRef = useRef();

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

  useFrame(({ clock }) => {
    torusKnotRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.5;
    torusKnotRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.5;
  });

  return (
    <TorusKnot
      ref={torusKnotRef}
      args={[1, 0.4, 300, 300]}
      position={[0, 0, 0]}
    >
      <meshStandardMaterial
        attach='material'
        map={albedoTexture}
        roughnessMap={roughnessTexture}
        metalnessMap={metalnessTexture}
        normalMap={normalTexture}
        aoMap={aoTexture}
      />
    </TorusKnot>
  );
};

const TorusKnotGeometry = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <RotatingTorusKnot />
      <OrbitControls />
    </Canvas>
  );
};

export default TorusKnotGeometry;
