"use client";

import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import FloatingCamera from './FloatingCamera';

export default function SpaceScene() {
    return (
        <div className="w-full h-screen absolute -z-1">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <FloatingCamera></FloatingCamera>  
                <Suspense fallback={null}>
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
            <fog attach="fog" args={['#0d0d24', 10, 50]} />



            {/* Lighting to highlight objects */}
            <ambientLight intensity={0.2} />
            <pointLight position={[5, 5, -5]} intensity={2} />
        </>
    );
}
