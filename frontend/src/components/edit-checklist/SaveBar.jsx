import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

function SaveBar({
    loading,
    disabled,
    onSave,
    onCancel,
}) {
    return (
        <motion.div
            initial={{
                y: 100,
            }}
            animate={{
                y: 0,
            }}
            transition={{
                duration: 0.3,
            }}
            className="
      fixed
      bottom-0
      left-1/2
      -translate-x-1/2

      w-full
      max-w-md

      border-t
      border-gray-200

      bg-white/95
      backdrop-blur-xl

      px-5
      py-4
      z-50
      "
        >
            <div className="flex gap-3">

                {/* Cancel */}

                <button
                    onClick={onCancel}
                    disabled={loading}
                    className="
          flex-1

          h-14

          rounded-2xl

          border
          border-gray-300

          bg-white

          font-semibold
          text-gray-700

          transition-all
          duration-200

          hover:bg-gray-100

          active:scale-95

          disabled:opacity-50
          "
                >
                    Cancel
                </button>

                {/* Save */}

                <button
                    onClick={onSave}
                    disabled={loading || disabled}
                    className={`
    flex-[1.4]
    h-14
    rounded-2xl
    text-white
    font-semibold
    flex items-center justify-center gap-2
    transition-all duration-200

    ${disabled
                            ? "bg-gray-300 cursor-not-allowed shadow-none"
                            : "bg-gradient-to-r from-[#2563EB] via-[#1D4ED8] to-[#1E40AF] shadow-lg hover:scale-[1.02] hover:shadow-xl active:scale-95"
                        }
  `}
                >
                    {loading ? (
                        <>
                            <Loader2
                                size={18}
                                className="animate-spin"
                            />
                            Saving...
                        </>
                    ) : (
                        "Save Changes"
                    )}
                </button>

            </div>
        </motion.div>
    );
}

export default SaveBar;