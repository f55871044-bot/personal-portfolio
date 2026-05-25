import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0.15,
      }}
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-3xl"
    />
  );
}