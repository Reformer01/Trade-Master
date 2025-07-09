
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

const Ring3D = () => {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={ringRef}>
        <torusGeometry args={[2, 0.3, 16, 100]} />
        <meshStandardMaterial 
          color="#FFD700" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#FFA500"
          emissiveIntensity={0.2}
        />
      </mesh>
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#FFD700" />
    </Float>
  );
};

export const RingAnimation = () => {
  return (
    <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-64 h-64 hidden lg:block">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <Ring3D />
      </Canvas>
    </div>
  );
};
