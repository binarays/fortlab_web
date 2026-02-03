import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative">
        <div className="flex items-end justify-center space-x-2">
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className="w-2 bg-[#E7E8BF] rounded-full"
              animate={{
                height: [20, 60, 20],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.15,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        <motion.p
          className="mt-8 text-[#E7E8BF] text-sm font-light tracking-widest text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          LOADING
        </motion.p>
      </div>
    </motion.div>
  );
}
