"use client";
"use client";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Component to rotate the mesh on each frame
const SpinningMesh = () => {
  const mesh = useRef();
  useFrame((state) => (mesh.current.rotation.y += 0.01));
  return (
    <mesh ref={mesh}>
      <torusGeometry args={[0.7, 0.2, 16, 100]} />
      <meshBasicMaterial color='red' />
    </mesh>
  );
};

// Orbit controls component
function Controls() {
  const { camera, gl } = useThree();
  return <OrbitControls camera={camera} gl={gl} />;
}

export default function Sphere() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas style={{ width: dimensions.width, height: dimensions.height }}>
      <SpinningMesh />
      <Controls />
      <perspectiveCamera
        position={[0, 0, 2]}
        aspect={dimensions.width / dimensions.height}
      />
      <pointLight position={[2, 3, 4]} intensity={0.1} />
    </Canvas>
  );
}
