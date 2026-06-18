import { motion } from "framer-motion";

function AuthCard({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: .15,
        duration: .45,
      }}
      className="
        rounded-[32px]

        border
        border-white/60

        bg-white/90
        backdrop-blur-xl

        p-7

        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      "
    >
      {children}
    </motion.div>
  );
}

export default AuthCard;