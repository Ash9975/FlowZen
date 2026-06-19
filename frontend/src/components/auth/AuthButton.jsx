import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";

function AuthButton({
  children,
  loading = false,
  loadingText = "Loading...",
  disabled = false,
  type = "submit",
  className = "",
  ...props
}) {
  const isDisabled = loading || disabled;

  return (
    <motion.button
      whileHover={
        !isDisabled
          ? {
            y: -2,
            scale: 1.01,
          }
          : {}
      }
      whileTap={
        !isDisabled
          ? {
            scale: 0.98,
          }
          : {}
      }
      transition={{
        duration: 0.2,
      }}
      type={type}
      disabled={isDisabled}
      className={`
        w-full
        h-14

        rounded-2xl

        bg-gradient-to-r
        from-[#7F9E2F]
        via-[#6F8E28]
        to-[#5F7A20]

        text-white
        text-base
        font-bold

        shadow-[0_10px_25px_rgba(127,158,47,0.35)]

        transition-all

        disabled:cursor-not-allowed
        disabled:opacity-70

        ${className}
      `}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-3">
          <LoaderCircle
            size={20}
            className="animate-spin"
          />
          {loadingText}
        </span>
      ) : (
        children
      )}
    </motion.button>
  );
}

export default AuthButton;