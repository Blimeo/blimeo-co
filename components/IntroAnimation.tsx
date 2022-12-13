import React, { useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";

export default function IntroAnimation() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        
      </Canvas>
    </div>
  );
}
