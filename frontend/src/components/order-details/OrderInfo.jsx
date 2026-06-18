import {
  CalendarDays,
  StickyNote,
} from "lucide-react";
import { motion } from "framer-motion";

function OrderInfo({
  createdAt,
  notes,
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
        delay: 0.15,
      }}
      className="
        mx-5
        mt-5
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-5
        shadow-sm
      "
    >
      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-primary/10
          "
        >
          <CalendarDays
            size={22}
            className="text-primary"
          />
        </div>

        <div>

          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
            Order Date
          </p>

          <h3 className="text-lg font-semibold text-gray-800">
            {new Date(createdAt).toLocaleDateString(
              "en-IN",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            )}
          </h3>

        </div>

      </div>

      {notes && (
        <div
          className="
            mt-5
            rounded-2xl
            bg-gray-50
            p-4
          "
        >
          <div className="mb-2 flex items-center gap-2">

            <StickyNote
              size={18}
              className="text-primary"
            />

            <p className="text-sm font-semibold text-gray-700">
              Notes
            </p>

          </div>

          <p className="text-sm leading-6 text-gray-600">
            {notes}
          </p>

        </div>
      )}
    </motion.div>
  );
}

export default OrderInfo;