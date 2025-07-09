
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const Coin3D = ({ color = "#FFD700" }) => {
  const coinRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (coinRef.current) {
      coinRef.current.rotation.y = state.clock.elapsedTime * 2;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={coinRef}>
        <cylinderGeometry args={[1, 1, 0.1, 32]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.9} 
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
};

export const CoinAnimation = ({ color }: { color?: string }) => {
  return (
    <div className="w-16 h-16 mx-auto mb-4">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} />
        <Coin3D color={color} />
      </Canvas>
    </div>
  );
};
