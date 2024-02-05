/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: Ivan-Kanaev (https://sketchfab.com/Ivan-Kanaev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hangar-e7e3cc07557b47c29cee79e56e6c3276
Title: Hangar
*/

import React, {useMemo, useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import {SpotLight} from "three";

export function Model(props) {
  const spotlight = useMemo(() => new SpotLight('#fff'), []);
  const { nodes, materials } = useGLTF('/model/scene.gltf')
  return (
    <group {...props} dispose={null} scale={.1}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Hangar_2_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Hangar_3_0.geometry} material={materials.material_1} />
          <mesh geometry={nodes['Hangar_Siding_green-2_0'].geometry} material={materials['Siding_white_baseColor']} />
          <mesh geometry={nodes.Hangar_Siding_green_0.geometry} material={materials.Siding_green} />
          <mesh geometry={nodes.Hangar_Siding_white_0.geometry} material={materials.Siding_white} material-color={props.wallColor} />
          <mesh geometry={nodes['Hangar_Roof-6a_0'].geometry} material={materials['Roof-6a']} />
          <mesh geometry={nodes['Hangar_Siding_green-3_0'].geometry} material={materials['Siding_green-3']} />
          <mesh geometry={nodes['Hangar_Proflist-1_0'].geometry} material={materials['Proflist-1']} material-color={props.roofColor} />
          <mesh geometry={nodes['Hangar_20_30k8-2_0'].geometry} material={materials['20_30k8-2']}  />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
