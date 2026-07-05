import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
function Knot(){
  const m=useRef()
  useFrame(({clock,mouse})=>{ if(!m.current)return
    m.current.rotation.x=clock.elapsedTime*0.25 + mouse.y*0.4
    m.current.rotation.y=clock.elapsedTime*0.35 + mouse.x*0.6 })
  return (<mesh ref={m}>
    <torusKnotGeometry args={[1,0.32,160,24]}/>
    <meshStandardMaterial color={'#C9A84C'} metalness={0.95} roughness={0.18} emissive={'#3a2f10'}/>
  </mesh>)
}
export default function BrandScene(){
  return (<Canvas camera={{position:[0,0,4.2],fov:45}} dpr={[1,1.6]} gl={{alpha:true,antialias:true}}>
    <ambientLight intensity={0.5}/>
    <pointLight position={[4,4,4]} intensity={1.4} color={'#E8C96A'}/>
    <pointLight position={[-4,-2,2]} intensity={0.8} color={'#4a90d9'}/>
    <Knot/>
  </Canvas>)
}
