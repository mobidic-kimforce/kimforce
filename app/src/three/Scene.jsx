import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const GOLD = '#C9A84C'
function latLon(lat, lon, r){
  const phi=(90-lat)*Math.PI/180, theta=(lon+180)*Math.PI/180
  return new THREE.Vector3(-r*Math.sin(phi)*Math.cos(theta), r*Math.cos(phi), r*Math.sin(phi)*Math.sin(theta))
}
const SEOUL=[37.5,127.0]
const TARGETS=[[35.7,139.7],[31.2,121.5],[25.2,55.3],[40.7,-74.0],[34.0,-118.2]]

function Dots({r=2}){
  const geo=useMemo(()=>{
    const N=1400, pos=[]
    for(let i=0;i<N;i++){
      const y=1-(i/(N-1))*2, rad=Math.sqrt(1-y*y), th=i*2.399963
      pos.push(Math.cos(th)*rad*r, y*r, Math.sin(th)*rad*r)
    }
    const g=new THREE.BufferGeometry()
    g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3))
    return g
  },[r])
  return <points geometry={geo}><pointsMaterial size={0.02} color={'#5a5240'} transparent opacity={0.8}/></points>
}

function Arc({from,to,delay=0}){
  const ref=useRef(); const head=useRef()
  const {curve,geo}=useMemo(()=>{
    const a=latLon(from[0],from[1],2), b=latLon(to[0],to[1],2)
    const mid=a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(2 + a.distanceTo(b)*0.6)
    const curve=new THREE.QuadraticBezierCurve3(a,mid,b)
    const geo=new THREE.TubeGeometry(curve,40,0.012,6,false)
    return {curve,geo}
  },[from,to])
  useFrame(({clock})=>{
    const t=(clock.elapsedTime*0.35+delay)%1
    if(head.current){ const p=curve.getPointAt(t); head.current.position.copy(p)
      head.current.scale.setScalar(0.5+Math.sin(t*Math.PI)*0.9) }
  })
  return (<group ref={ref}>
    <mesh geometry={geo}><meshBasicMaterial color={GOLD} transparent opacity={0.28}/></mesh>
    <mesh ref={head}><sphereGeometry args={[0.03,10,10]}/><meshBasicMaterial color={'#E8C96A'}/></mesh>
  </group>)
}

function City({pos}){
  const m=useRef()
  useFrame(({clock})=>{ if(m.current) m.current.scale.setScalar(1+Math.sin(clock.elapsedTime*2)*0.3) })
  return (<group position={pos}>
    <mesh><sphereGeometry args={[0.035,12,12]}/><meshBasicMaterial color={'#E8C96A'}/></mesh>
    <mesh ref={m}><sphereGeometry args={[0.06,12,12]}/><meshBasicMaterial color={GOLD} transparent opacity={0.35}/></mesh>
  </group>)
}

function Globe(){
  const g=useRef()
  useFrame((_,d)=>{ if(g.current) g.current.rotation.y+=d*0.06 })
  const seoul=latLon(SEOUL[0],SEOUL[1],2)
  return (<group ref={g} rotation={[0.35,0,0.1]}>
    <mesh><sphereGeometry args={[1.98,48,48]}/><meshPhongMaterial color={'#0d0d10'} emissive={'#0a0a0a'} shininess={8}/></mesh>
    <mesh><sphereGeometry args={[2.01,24,24]}/><meshBasicMaterial color={'#2a2620'} wireframe transparent opacity={0.18}/></mesh>
    <Dots/>
    <City pos={seoul}/>
    {TARGETS.map((t,i)=><City key={i} pos={latLon(t[0],t[1],2)}/>)}
    {TARGETS.map((t,i)=><Arc key={i} from={SEOUL} to={t} delay={i*0.18}/>)}
  </group>)
}

function Particles(){
  const p=useRef()
  const geo=useMemo(()=>{
    const N=700, pos=[]
    for(let i=0;i<N;i++){ const r=6+Math.random()*10
      const th=Math.random()*Math.PI*2, ph=Math.acos(2*Math.random()-1)
      pos.push(r*Math.sin(ph)*Math.cos(th), r*Math.sin(ph)*Math.sin(th), r*Math.cos(ph)) }
    const g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3)); return g
  },[])
  useFrame((_,d)=>{ if(p.current) p.current.rotation.y+=d*0.01 })
  return <points ref={p} geometry={geo}><pointsMaterial size={0.045} color={GOLD} transparent opacity={0.5}/></points>
}

function Rig(){
  const {camera}=useThree(); const v=useRef({x:0,y:0})
  useFrame(()=>{
    camera.position.x += (v.current.x*0.8 - camera.position.x)*0.05
    camera.position.y += (v.current.y*0.5 - camera.position.y)*0.05
    camera.lookAt(0,0,0)
  })
  React.useEffect(()=>{
    const h=e=>{ v.current={x:(e.clientX/window.innerWidth-0.5)*2, y:-(e.clientY/window.innerHeight-0.5)*2} }
    window.addEventListener('mousemove',h); return ()=>window.removeEventListener('mousemove',h)
  },[])
  return null
}

export default function HeroScene(){
  return (
    <Canvas camera={{position:[0,0,6],fov:45}} dpr={[1,1.6]} gl={{antialias:true,alpha:true}}>
      <ambientLight intensity={0.7}/>
      <pointLight position={[5,3,5]} intensity={1.1} color={'#E8C96A'}/>
      <pointLight position={[-5,-2,-3]} intensity={0.5} color={'#4a90d9'}/>
      <Particles/>
      <Globe/>
      <Rig/>
    </Canvas>
  )
}
