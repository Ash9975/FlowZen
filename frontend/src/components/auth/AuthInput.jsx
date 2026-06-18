import { motion } from "framer-motion";

function AuthInput({
    label,
    icon: Icon,
    error,
    className = "",
    ...props
}) {
    return (
        <div className="mb-5">

            {/* Label */}
            <label className="mb-2 block text-sm font-semibold text-gray-700">
                {label}
            </label>

            {/* Input */}
            <motion.div
                whileHover={{ scale: 1.01 }}
                className={`
          flex
          items-center
          gap-3

          rounded-2xl

          border
          ${error
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

                {Icon && (
                    <Icon
                        size={22}
                        className="text-[#7F9E2F]"
                    />
                )}

                <input
                    {...props}
                    className="
            w-full

            bg-transparent

            text-gray-900
            placeholder:text-gray-400

            outline-none
          "
                />

            </motion.div>

            {error && (
                <p className="mt-2 text-sm text-red-500">
                    {error}
                </p>
            )}

        </div>
    );
}

export default AuthInput;