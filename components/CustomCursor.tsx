"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over a clickable element
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" || 
        target.closest("a") !== null || 
        target.closest("button") !== null
      );
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <>
      {/* Inner Dot */}
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-[#CBFC01] rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out mix-blend-difference"
        style={{ 
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${isPointer ? 0.5 : 1})`,
        }}
      />
      {/* Outer Ring */}
      <div 
        className="fixed top-0 left-0 w-10 h-10 border-[1.5px] border-[#CBFC01] rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out opacity-60 mix-blend-difference"
        style={{ 
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0) scale(${isPointer ? 1.5 : 1})`,
          backgroundColor: isPointer ? "rgba(203, 252, 1, 0.1)" : "transparent"
        }}
      />
    </>
  );
}
