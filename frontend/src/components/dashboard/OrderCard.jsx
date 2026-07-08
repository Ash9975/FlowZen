import { motion } from "framer-motion";
import {
  Package,
  ChevronRight,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDeleteOrder } from "../../hooks/useDeleteOrder";
import { showSuccess, showError } from "../../lib/toast";

function OrderCard({
  order,
  showDelete = false,
}) {

  const navigate = useNavigate();
  const deleteOrderMutation = useDeleteOrder();

  const badgeConfig = {

    pending: {
      label: "Pending",
      className: "bg-orange-100 text-orange-700",
    },

    "in-progress": {
      label: "In Progress",
      className: "bg-blue-100 text-blue-700",
    },

    completed: {
      label: "Completed",
      className: "bg-green-100 text-green-700",
    },

  };

  const badge =
    badgeConfig[order.status] ?? {

      label: order.status,
      className: "bg-gray-100 text-gray-700",

    };

  return (

    <motion.div

      whileHover={{
        y: -3,
        scale: 1.01,
      }}

      whileTap={{
        scale: 0.98,
      }}

      transition={{
        duration: 0.2,
      }}

      onClick={() =>
        navigate(`/orders/${order._id}`)
      }

      className="
                cursor-pointer

                rounded-3xl

                border
                border-[#E8EDD9]

                bg-white

                p-5

                shadow-sm

                transition-all

                hover:shadow-md
            "

    >

      {/* Header */}

      <div className="flex items-start justify-between">

        <div className="flex gap-4">

          <div
            className="
                            flex
                            h-12
                            w-12

                            items-center
                            justify-center

                            rounded-2xl

                            bg-[#F5F8ED]
                        "
          >

            <Package
              size={22}
              className="text-[#7F9E2F]"
            />

          </div>

          <div>

            <h3
              className="
                                text-base
                                font-bold
                                text-[#23330F]
                            "
            >

              {order.customerName}

            </h3>

            <p
              className="
                                mt-1
                                text-sm
                                text-[#667085]
                            "
            >

              {order.totalItems} Items

            </p>

          </div>

        </div>

        <div className="flex items-center gap-2">

          {showDelete && (

            <button

              onClick={async (e) => {

                e.stopPropagation();

                const confirmed = window.confirm(
                  `Delete "${order.customerName}"?`
                );

                if (!confirmed) return;

                try {

                  await deleteOrderMutation.mutateAsync(
                    order._id
                  );

                  showSuccess(
                    "Order deleted successfully."
                  );

                } catch {

                  showError(
                    "Unable to delete order."
                  );

                }

              }}

              className="
        rounded-lg
        p-2

        text-red-500

        transition

        hover:bg-red-50
      "

            >

              <Trash2 size={18} />

            </button>

          )}

          <ChevronRight
            size={20}
            className="text-gray-400"
          />

        </div>

      </div>

      {/* Progress */}

      <div className="mt-5">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-xs font-medium text-gray-500">

            Progress

          </span>

          <span className="text-xs font-bold text-[#23330F]">

            {order.progress}%

          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-[#EEF3E3]">

          <motion.div

            initial={{
              width: 0,
            }}

            animate={{
              width: `${order.progress}%`,
            }}

            transition={{
              duration: 0.7,
            }}

            className={`
                            h-full
                            rounded-full
                            transition-all

                            ${order.progress === 100
                ? "bg-green-500"
                : order.progress > 0
                  ? "bg-primary"
                  : "bg-orange-400"
              }
                        `}

          />

        </div>

      </div>

      {/* Footer */}

      <div className="mt-5 flex items-center justify-between">

        <span
          className={`
                        rounded-full

                        px-3
                        py-1

                        text-xs
                        font-semibold

                        ${badge.className}
                    `}
        >

          {badge.label}

        </span>

        <span
          className="
                        text-xs
                        font-medium
                        text-gray-500
                    "
        >

          {new Date(order.createdAt).toLocaleDateString(
            "en-IN",
            {
              day: "numeric",
              month: "short",
            }
          )}

        </span>

      </div>

    </motion.div>

  );

}

export default OrderCard;