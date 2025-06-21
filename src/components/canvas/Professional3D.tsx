import React, { useRef } from 'react';
import { Stars } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

interface Professional3DProps {
  theme: 'dark' | 'light';
}

const Professional3D: React.FC<Professional3DProps> = ({ theme }) => {
  const { camera } = useThree();
  const t = useRef(0);

  useFrame((_, delta) => {
    t.current += delta * 0.05; // Slow movement
    // Circular camera movement
    camera.position.x = Math.sin(t.current) * 10;
    camera.position.z = Math.cos(t.current) * 10;
    camera.lookAt(0, 0, 0);
  });

  const starColor = theme === 'dark' ? '#fff' : '#000'; // White stars for dark, pure black for light

  return (
    <Stars
      radius={100} // Radius of the inner sphere (where stars are visible)
      depth={50}   // Depth of area where stars are distributed
      count={5000} // Number of stars
      factor={4}   // Size factor
      saturation={0.8} // Star color saturation
      fade // Faded edges for a more galaxy-like look
      speed={1} // Animation speed
      material-color={starColor} // Dynamic color based on theme
    />
  );
};

export default Professional3D; 