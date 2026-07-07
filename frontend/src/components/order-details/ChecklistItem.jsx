import { motion } from "framer-motion";
import { Check } from "lucide-react";

function ChecklistItem({
  item,
  onToggle,
  readOnly
}
) {
  return (
    <motion.div
      layout
      whileTap={{
        scale: 0.98,
      }}
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={() => {

        if (readOnly) {
          console.log("Blocked");
          return;
        }

        console.log("Calling toggle...");
        onToggle(item._id);
      }}

      className={`
        rounded-3xl
        border
        p-5

        flex
        items-center
        justify-between

        shadow-sm
        transition-all
        duration-300

        ${readOnly
          ? "cursor-not-allowed opacity-70"
          : "cursor-pointer active:scale-[0.98]"}

        ${item.completed
          ? "bg-gradient-to-r from-[#F4FBF3] to-[#EEF8ED] border-[#7CCB73] shadow-[0_8px_20px_rgba(122,203,115,0.18)]"
          : "bg-white border-gray-200 hover:border-primary hover:shadow-md"
        }
      `}
    >
      <div className="flex-1">

        <h3
          className={`
            text-lg
            font-semibold
            transition-all

            ${item.completed
              ? "text-gray-400 line-through"
              : "text-gray-900"
            }
          `}
        >
          {item.itemName}
        </h3>

        <div className="mt-2 flex items-center gap-2">

          <span
            className="
              rounded-full
              bg-gray-100
              px-3
              py-1

              text-sm
              font-medium
              text-gray-600
            "
          >
            {item.quantity} {item.unit}
          </span>

        </div>

      </div>

      <motion.div
        animate={{
          scale: item.completed ? 1 : 0.95,
        }}
        transition={{
          duration: 0.2,
        }}
        className={`
          ml-5
          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-full

          border-2

          transition-all
          duration-300

          ${item.completed
            ? "border-[#48BB52] bg-[#48BB52] text-white shadow-lg"
            : "border-gray-300 bg-white"
          }
        `}
      >
        {item.completed && (
          <Check
            size={24}
            strokeWidth={3}
          />
        )}
      </motion.div>

    </motion.div>

  );
}

export default ChecklistItem;