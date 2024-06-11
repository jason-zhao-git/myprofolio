import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, OrbitControls } from '@react-three/drei';
import { Model } from "./mcchest";
import * as THREE from 'three';

const Scene = () => {
  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 40 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1.5} />
      <Suspense fallback={<Loader />}>
        <Model />
        <OrbitControls minDistance={23} maxDistance={32} mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: null // Disable right click
            }}/>
      </Suspense>
    </Canvas>
  );
};

export default Scene;