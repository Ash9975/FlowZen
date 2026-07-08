import { useState } from "react";
import { useParams } from "react-router-dom";

import { useOrder } from "../hooks/useOrder";
import { useToggleChecklist } from "../hooks/useToggleChecklist";
import { useCompleteOrder } from "../hooks/useCompleteOrder";

import OrderHeader from "../components/order-details/OrderHeader";
import ProgressCard from "../components/order-details/ProgressCard";
import OrderInfo from "../components/order-details/OrderInfo";
import ChecklistList from "../components/order-details/ChecklistList";
import CompleteOrderButton from "../components/order-details/CompleteOrderButton";
import EmptyChecklist from "../components/order-details/EmptyChecklist";
import CompletionCard from "../components/order-details/CompletionCard";
import QueryErrorState from "../components/common/QueryErrorState";
import {
  showSuccess,
  showError,
} from "../lib/toast";

function OrderDetails() {

  const { id } = useParams();

  const {
    data: order,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  } = useOrder(id);

  const [showCompletion, setShowCompletion] = useState(false);

  const toggleChecklistMutation = useToggleChecklist(id);

  const completeOrderMutation = useCompleteOrder(id);

  const toggleChecklist = (itemId) => {

    toggleChecklistMutation.mutate(itemId);

  };

  const handleCompleteOrder = async () => {

    if (completeOrderMutation.isPending) return;

    try {

      await completeOrderMutation.mutateAsync();

      showSuccess(
        "Order completed successfully."
      );

      setShowCompletion(true);

    } catch (err) {

      showError(
        err?.response?.data?.message ||
        "Unable to complete order."
      );

    }

  };

  if (isLoading) {

    console.log("OrderDetails loading...");

    return (

      <div className="animate-pulse pb-28">

        <div className="h-20 bg-white" />

        <div className="mx-5 mt-6 h-36 rounded-3xl bg-gray-200" />

        <div className="mx-5 mt-5 h-24 rounded-2xl bg-gray-200" />

        {[1, 2, 3, 4, 5].map(i => (

          <div
            key={i}
            className="mx-5 mt-4 h-20 rounded-2xl bg-gray-200"
          />

        ))}

      </div>

    );

  }

  if (isError) {

    return (

      <QueryErrorState
        title="Failed to load order details."
        message={error.message}
        onRetry={refetch}
        loading={isRefetching}
      />

    );

  }

  if (!order) {

    return (

      <div className="flex h-[70vh] items-center justify-center">

        <p className="text-gray-500">
          Order not found.
        </p>

      </div>

    );

  }

  const canComplete = order.totalItems > 0;
  const completedItems = order.completedItems ?? 0;
  const totalItems = order.totalItems ?? 0;
  const progress = order.progress ?? 0;

  const getPackingTime = () => {

    if (!order.completedAt) return "--";

    const start = new Date(order.createdAt);
    const end = new Date(order.completedAt);

    const diff = Math.floor((end - start) / 1000);

    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;

    return `${minutes}m ${seconds}s`;

  };

  return (

    <div className="bg-gray-50 pb-28">

      <OrderHeader
        customerName={order.customerName}
        orderId={order._id}
        orderStatus={order.status}
      />

      <ProgressCard
        completed={completedItems}
        total={totalItems}
        progress={progress}
      />

      <OrderInfo
        createdAt={order.createdAt}
        notes={order.notes}
      />

      {!order.checklist || order.checklist.length === 0 ? (

        <EmptyChecklist />

      ) : (

        <ChecklistList
          checklist={order.checklist}
          onToggle={toggleChecklist}
          readOnly={
            order.status === "completed"
          }
        />

      )}

      {order.status !== "completed" ? (

        <CompleteOrderButton
          disabled={
            order.progress !== 100 ||
            completeOrderMutation.isPending
          }
          onComplete={handleCompleteOrder}
        />

      ) : (

        <div className="mx-5 mt-8 rounded-2xl border border-green-200 bg-green-50 p-5 text-center shadow-sm">

          <h3 className="text-lg font-bold text-green-700">
            Order Completed
          </h3>

          <p className="mt-2 text-sm text-green-600">
            This order is now read-only.
          </p>

        </div>

      )}

      {showCompletion && (

        <CompletionCard
          customerName={order.customerName}
          completedItems={order.completedItems}
          totalItems={order.totalItems}
          packedTime={getPackingTime()}
        />

      )}

    </div>

  );

}

export default OrderDetails;