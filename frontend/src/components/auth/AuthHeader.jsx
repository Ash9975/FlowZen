import { motion } from "framer-motion";

function AuthHeader({
  title = "Welcome Back",
  subtitle = "Sign in to continue managing your packing workflow.",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className="mb-10 text-center"
    >
      {/* Logo */}
      <motion.img
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.15,
          type: "spring",
          stiffness: 140,
        }}
        src="/logo.png"
        alt="FlowZen"
        className="mx-auto mb-5 h-20 w-20 rounded-2xl shadow-lg"
      />

      {/* Brand */}
      <h1 className="text-4xl font-extrabold tracking-tight text-[#334155]">
        Flow<span className="text-[#7F9E2F]">Zen</span>
      </h1>

      {/* Heading */}
      <h2 className="mt-5 text-2xl font-bold text-gray-900">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-500">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default AuthHeader;