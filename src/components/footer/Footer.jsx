export default function Footer() {
  return (
    <footer className="relative py-10 sm:py-12 text-center text-gray-400 border-t border-white/10 bg-black overflow-hidden">

      {/* Glow (optional premium touch) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-cyan-500/10 blur-[80px]" />

      <div className="relative z-10 px-4">

        <p className="text-sm sm:text-base">
          © 2026 <span className="text-white font-semibold">Your Name</span>. All rights reserved.
        </p>

        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          Built with React + Tailwind + Framer Motion
        </p>

      </div>
    </footer>
  );
}