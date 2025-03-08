"use client";

import { Html, OrbitControls, Stars, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import FloatingCamera from "./FloatingCamera";
import { Suspense } from "react";

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2 text-white z-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
        <p className="text-lg text-white">Loading</p>
      </div>
    </Html>
  );
}
export default function SpaceScene() {
  
  return (
    <div className="w-full h-screen absolute -z-2">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={<Loader />}>
          <FloatingCamera></FloatingCamera>
          <SpaceEnvironment />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

function SpaceEnvironment() {
  return (
    <>
      {/* Stars in the background */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />

      {/* Nebula-like fog */}
      <fog attach="fog" args={["#0d0d24", 10, 50]} />

      {/* Lighting to highlight objects */}
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, -5]} intensity={2} />
    </>
  );
}
