import { motion } from "framer-motion";

export default function HolographicKey({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white select-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transition: { delay: 2, duration: 0.5 } }}
      onAnimationComplete={onComplete}
    >
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-7xl font-black italic tracking-tighter text-red-600 font-sans">
          SIUUUUU!
        </h1>
        <p className="text-sm font-bold uppercase tracking-widest text-neutral-800 mt-2">
          CR7 ENCRIPT // O MAIOR DA HISTÓRIA
        </p>
      </motion.div>
    </motion.div>
  );
}