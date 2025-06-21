import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { Vector3 } from 'three';

const AnimatedLine = () => {
  const lineRef = useRef<any>();

  useFrame((state, delta) => {
    if (lineRef.current) {
      lineRef.current.rotation.z += delta * 0.2;
    }
  });

  const points: [number, number, number][] = [
    [-2, 0, 0],
    [2, 0, 0],
  ];

  return (
    <Line
      ref={lineRef}
      points={points}
      color="#a084fa"
      lineWidth={2}
      dashed={false}
    />
  );
};

export default AnimatedLine; 