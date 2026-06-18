import {
  ArrowLeft,
  Pencil,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function OrderHeader({
  customerName,
  orderId,
  orderStatus,
}) {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100">

      <div className="mx-auto flex max-w-md items-center justify-between px-5 py-4">

        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate(-1)}
            className="rounded-xl p-2 transition hover:bg-gray-100 active:scale-95"
          >
            <ArrowLeft size={24} />
          </button>

          <div>

            <h1 className="text-2xl font-bold text-gray-900">
              {customerName}
            </h1>

            <p className="text-sm text-gray-500">
              Packing Checklist
            </p>

          </div>

        </div>
        {
          orderStatus !== "completed" && (
            <button
              onClick={() =>
                navigate(`/orders/${orderId}/edit`)
              }
            >
              <Pencil size={16} />
              Edit
            </button>
          )
        }


      </div>

    </div>
  );
}

export default OrderHeader;