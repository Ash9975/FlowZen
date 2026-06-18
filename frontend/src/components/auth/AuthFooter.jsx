import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function AuthFooter({
  text,
  linkText,
  to,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.25,
      }}
      className="mt-7 text-center"
    >
      <p className="text-sm text-gray-500">
        {text}
      </p>

      <Link
        to={to}
        className="
          mt-3
          inline-flex
          items-center
          gap-2

          font-semibold
          text-[#7F9E2F]

          transition-all

          hover:gap-3
          hover:text-[#5F7A20]
        "
      >
        {linkText}

        <ArrowRight size={18} />
      </Link>
    </motion.div>
  );
}

export default AuthFooter;