import { useState } from "react";
import { motion } from "framer-motion";
import {
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

function PasswordInput({
  label = "Password",
  error,
  className = "",
  ...props
}) {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <div className="mb-5">

      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <motion.div
        whileHover={{
          y: -1,
        }}
        className={`
          flex
          items-center

          rounded-2xl

          border
          ${
            error
              ? "border-red-400"
              : "border-gray-200 focus-within:border-[#7F9E2F]"
          }

          bg-[#F8FAF3]

          px-4
          py-4

          transition-all
          duration-200

          focus-within:ring-4
          focus-within:ring-[#7F9E2F]/10

          ${className}
        `}
      >

        <Lock
          size={22}
          className="text-[#7F9E2F]"
        />

        <input
          {...props}
          type={
            showPassword
              ? "text"
              : "password"
          }
          className="
            ml-3
            w-full

            bg-transparent

            text-gray-900
            placeholder:text-gray-400

            outline-none
          "
        />

        <button
          type="button"
          onClick={() =>
            setShowPassword(
              !showPassword
            )
          }
          className="
            ml-2

            text-gray-400

            transition

            hover:text-[#7F9E2F]
          "
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>

      </motion.div>

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}

export default PasswordInput;