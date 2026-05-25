import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
      >
        Welcome
      </motion.h1>
    </motion.div>
  );
}