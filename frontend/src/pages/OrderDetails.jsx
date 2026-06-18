import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import api from "../api/axios";

import OrderHeader from "../components/order-details/OrderHeader";
import ProgressCard from "../components/order-details/ProgressCard";
import OrderInfo from "../components/order-details/OrderInfo";
import ChecklistList from "../components/order-details/ChecklistList";
import CompleteOrderButton from "../components/order-details/CompleteOrderButton";
import EmptyChecklist from "../components/order-details/EmptyChecklist";
import BottomNav from "../components/dashboard/BottomNav";
import CompletionCard from "../components/order-details/CompletionCard";
import { useCallback } from "react";

function OrderDetails() {
  const location = useLocation();
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  const fetchOrder = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await api.get(
        `/orders/${id}`
      );

      setOrder(data.order);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [id]);
  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  const toggleChecklist = async (itemId) => {
    console.log("toggleChecklist called", itemId);
    if (saving) return;

    try {
      setSaving(true);

      const { data } = await api.patch(
        `/checklists/${itemId}/toggle`
      );

      setOrder(prev => ({
        ...prev,

        progress: data.order.progress,
        completedItems: data.order.completedItems,
        totalItems: data.order.totalItems,
        status: data.order.status,

        checklist: prev.checklist.map(item =>
          item._id === itemId
            ? data.item
            : item
        )
      }));

    } catch (err) {
      console.log("STATUS:", err.response?.status);
      console.log("DATA:", err.response?.data);
    } finally {
      setSaving(false);
    }
  };

  const handleCompleteOrder = async () => {
    try {

      const { data } = await api.patch(`/orders/${id}/complete`);

      console.log("Completed Order:", data.order);

      setOrder(data.order);
      setShowCompletion(true);

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Unable to complete order."
      );

    }
  };

  if (loading) {
    return (
      <div className="max-w-md mx-auto min-h-screen bg-white animate-pulse">

        <div className="h-20 bg-white" />

        <div className="mx-5 mt-6 h-36 rounded-3xl bg-gray-200" />

        <div className="mx-5 mt-5 h-24 rounded-2xl bg-gray-200" />

        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="mx-5 mt-4 h-20 rounded-2xl bg-gray-200"
          />
        ))}

      </div>
    );
  }
  if (!order) {
    return (
      <div className="mx-auto flex min-h-screen max-w-md items-center justify-center bg-white">
        <p className="text-gray-500">
          Order not found.
        </p>
      </div>
    );
  }

  const canComplete = order.completedItems === order.totalItems && order.totalItems > 0;

  const completedItems = order?.completedItems ?? 0;

  const totalItems = order?.totalItems ?? 0;

  const progress = order?.progress ?? 0;

  const getPackingTime = () => {
    if (!order?.completedAt) return "--";

    const start = new Date(order.createdAt);

    const end = new Date(order.completedAt);

    const diff = Math.floor(
      (end - start) / 1000
    );

    const minutes = Math.floor(diff / 60);

    const seconds = diff % 60;

    return `${minutes}m ${seconds}s`;
  };
  console.log("ORDER STATUS:", order.status);
  console.log("READ ONLY:", order.status === "completed");
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .35 }}
      className="mx-auto max-w-md min-h-screen bg-gray-50 pb-50"
    >
      <OrderHeader
        customerName={order.customerName}
        orderId={order._id}
        orderStatus={order.status}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: .1,
        }}
      >
        <ProgressCard
          completed={completedItems}
          total={totalItems}
          progress={progress}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .18 }}
      >
        <OrderInfo
          createdAt={order.createdAt}
          notes={order.notes}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .28 }}
      >
        {!order?.checklist || order.checklist.length === 0 ? (
          <EmptyChecklist />
        ) : (
          <ChecklistList
            checklist={order?.checklist || []}
            onToggle={toggleChecklist}
            readOnly={order.status === "completed"}
          />
        )}
      </motion.div>

      {
        order.status !== "completed" ? (
          <CompleteOrderButton
            disabled={!canComplete}
            onComplete={handleCompleteOrder}
          />
        ) : (
          <div className="mx-5 mt-8 rounded-2xl border border-green-200 bg-green-50 p-5 text-center shadow-sm">

            <h3 className="text-lg font-bold text-green-700">
              ✅ Order Completed
            </h3>

            <p className="mt-2 text-sm text-green-600">
              This order is now read-only.
            </p>

          </div>
        )
      }

      {showCompletion && (
        <CompletionCard
          customerName={order.customerName}
          completedItems={order.completedItems}
          totalItems={order.totalItems}
          packedTime={getPackingTime()}
        />
      )}
      <BottomNav />
    </motion.div>
  );
}

export default OrderDetails;