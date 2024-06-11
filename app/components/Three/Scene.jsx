import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, OrbitControls } from '@react-three/drei';
import { Model } from "./mcchest";

const Scene = () => {
  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 40 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1.5} />
      <Suspense fallback={<Loader />}>
        <Model />
        <OrbitControls minDistance={15} maxDistance={20}/>
      </Suspense>
    </Canvas>
  );
};

export default Scene;