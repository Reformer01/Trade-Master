
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const Crystal3D = () => {
  const crystalRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (crystalRef.current) {
      crystalRef.current.rotation.y = state.clock.elapsedTime * 0.8;
      crystalRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={crystalRef}>
        <octahedronGeometry args={[1.5]} />
        <meshStandardMaterial 
          color="#22C55E" 
          metalness={0.1} 
          roughness={0.1}
          transparent
          opacity={0.8}
          emissive="#16A34A"
          emissiveIntensity={0.3}
        />
      </mesh>
      <pointLight position={[0, 2, 0]} intensity={0.5} color="#22C55E" />
    </Float>
  );
};

export const CrystalAnimation = () => {
  return (
    <div className="w-20 h-20 mx-auto mb-6">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[3, 3, 3]} intensity={0.7} />
        <Crystal3D />
      </Canvas>
    </div>
  );
};
