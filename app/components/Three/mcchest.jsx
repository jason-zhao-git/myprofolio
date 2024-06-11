/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 .\public\3Dmods\minecraft_chest.glb 
Author: Blender3D (https://sketchfab.com/Blender3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/minecraft-chest-83c5b03288e9416fbe65616e45de2918
Title: Minecraft Chest
*/

import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
// Chest Sound
import chestsound from '../../../assets/sound/chestOpen.mp3';

const soundChest = new Audio(chestsound);

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/3Dmods/minecraft_chest.glb');
  const { actions } = useAnimations(animations, group);
  
  const [isplaying, setPlay] = useState(false);

  useEffect(() => {
    if (props.open) {
      setPlay(true)
      actions['Chest_0_A|Chest_0_AAction'].repetitions = 1;
      soundChest.volume = 0.3;
      soundChest.play()
      actions['Chest_0_A|Chest_0_AAction'].play();
      actions['Chest_0_A|Chest_0_AAction'].reset();
      setTimeout(() => {
        setPlay(false);
      }, 1000);
    }
  }, [props.open]);

  const handleClick = () => {
    if (!isplaying) {
      props.setOpen(!props.open);
    }
  };

  return (
    <group ref={group} {...props} dispose={null} scale={[0.03, 0.03, 0.03]} onClick={handleClick}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="chestfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Chest_0_A" position={[-6.365, -87.985, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_11" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Material} skeleton={nodes.Object_12.skeleton} />
                  </group>
                </group>
                <group name="Chest_0" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/3Dmods/minecraft_chest.glb');
