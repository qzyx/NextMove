import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function FloatingCamera() {
    const cameraRef = useRef();

    useFrame(({ camera, clock }) => {
        camera.position.x = Math.sin(clock.getElapsedTime() * 0.03) * 2;
        camera.position.z = Math.cos(clock.getElapsedTime() * 0.03) * 5;
        camera.lookAt(0, 0, 0);
    });

    return null;
}
