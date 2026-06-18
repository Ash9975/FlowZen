import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

function ProgressCard({
  completed = 0,
  total = 0,
  progress = 0,
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
        duration: 0.35,
      }}
      className="
      mx-5
      mt-5
      rounded-3xl

      bg-gradient-to-br
      from-[#7F9E2F]
      to-[#6E8B28]

      p-6
      text-white

      shadow-[0_10px_25px_rgba(0,0,0,0.12)]
      "
    >
      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-medium text-white/75">
            Packing Progress
          </p>

          <div className="flex items-end gap-2 mt-2">

            <h2 className="text-[44px] leading-none font-bold">
              {completed}
            </h2>

            <span className="text-3xl font-semibold text-white/70">
              /{total}
            </span>

          </div>

          <p className="mt-3 text-sm font-medium text-white/90">
            {progress}% Completed
          </p>

        </div>

        <motion.div
          animate={{
            scale:
              progress === 100
                ? [1, 1.08, 1]
                : 1,
          }}
          transition={{
            duration: 0.45,
          }}
          className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full

          border-[3px]
          border-white/60
        "
        >
          <CheckCircle2
            size={26}
            strokeWidth={2.5}
          />
        </motion.div>

      </div>

      <div className="mt-6">

        <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/20">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
            h-full
            rounded-full
            bg-[#F5F7EF]
          "
          />

        </div>

      </div>
    </motion.div>
  );
}

export default ProgressCard;