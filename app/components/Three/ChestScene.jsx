
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, OrbitControls } from '@react-three/drei';
import { Model } from "./mcchest";
import * as THREE from 'three';

const ChestScene = (props) => {
    

  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 40 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 10, 5]} intensity={2} />

        <Model open={props.open} setOpen={props.setOpen}/>
        <OrbitControls minDistance={23} maxDistance={32} mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.ROTATE // Disable right click
            }}/>
 
    </Canvas>
  );
};

export default ChestScene;