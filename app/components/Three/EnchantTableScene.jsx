
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, OrbitControls } from '@react-three/drei';
import { Model } from "./mctable";
import * as THREE from 'three';

const EnchantTableScene = (props) => {
    

  return (
    <Canvas camera={{ position: [400, 500, 500], fov: 40 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1.5} />
   
      <Model open={props.open} setOpen={props.setOpen} />
    
      <OrbitControls 
        minDistance={800} 
        maxDistance={1000} 
        mouseButtons={{
          LEFT: THREE.MOUSE.ROTATE,
          MIDDLE: THREE.MOUSE.DOLLY,
          RIGHT: THREE.MOUSE.ROTATE
        }}
      />
    </Canvas>
  );
};

export default EnchantTableScene;