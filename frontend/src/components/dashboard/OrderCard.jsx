import { motion } from "framer-motion";
import { Package } from "lucide-react";
import { useNavigate } from "react-router-dom";

function OrderCard({ order }) {
  const navigate = useNavigate();

  const badge =
    order.status === "completed"
      ? "bg-green-100 text-green-700"
      : order.status === "pending"
      ? "bg-orange-100 text-orange-600"
      : "bg-blue-100 text-blue-700";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={() =>
        navigate(`/orders/${order._id}`)
      }
      className="cursor-pointer rounded-[26px] border border-border bg-white p-5 shadow-sm"
    >
      <div className="flex items-center justify-between mx-auto max-w-md">
        <div className="flex gap-3">
          <div className="rounded-2xl bg-secondary p-3">
            <Package
              className="text-primary"
              size={20}
            />
          </div>

          <div>
            <h3 className="font-semibold">
              {order.customerName}
            </h3>

            <p className="text-sm text-muted-foreground">
              {order.totalItems} Items •{" "}
              {order.progress}% Done
            </p>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${badge}`}
        >
          {order.status}
        </span>
      </div>

      <div className="mt-4 h-2 rounded-full bg-gray-100">
        <div
          className="h-full rounded-full bg-primary"
          style={{
            width: `${order.progress}%`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default OrderCard;