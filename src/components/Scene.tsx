import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Text3D } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

// Muñeco sencillo en 2D (SVG animado)
function Character({ onMove }) {
  const ref = useRef();

  useEffect(() => {
    gsap.to(ref.current, {
      x: 2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      onUpdate: () => onMove(ref.current.position.x),
    });
  }, [onMove]);

  return (
    <mesh ref={ref} position={[-2, -1, 0]}>
      <planeGeometry args={[1, 2]} />
      <meshBasicMaterial color="orange" />
    </mesh>
  );
}

// Texto 3D con Toliboy
function ToliboyText({ x }) {
  return (
    <Text3D
      font="/fonts/helvetiker_regular.typeface.json"
      size={0.7}
      height={0.3}
      position={[x, -1, 0]}
    >
      Toliboy
      <meshStandardMaterial color="royalblue" />
    </Text3D>
  );
}

export default function Scene() {
  const [textX, setTextX] = React.useState(-2);

  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />

      <Character onMove={setTextX} />
      <ToliboyText x={textX + 1.5} />
    </Canvas>
  );
}
