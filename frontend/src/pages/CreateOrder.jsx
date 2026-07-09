import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useCreateOrder } from "../hooks/useCreateOrder";

import CreateOrderHeader from "../components/create-order/CreateOrderHeader";
import CustomerInput from "../components/create-order/CustomerInput";
import UploadBox from "../components/create-order/UploadBox";
import NotesInput from "../components/create-order/NotesInput";
import CreateButton from "../components/create-order/CreateButton";
import OrderSourceSelector from "../components/create-order/OrderSourceSelector";

import {
  showSuccess,
  showError,
} from "../lib/toast";

function CreateOrder() {

  const navigate = useNavigate();

  const createOrderMutation = useCreateOrder();

  const [customerName, setCustomerName] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState(null);

  const [source, setSource] =
    useState("upload");

  const [orderText, setOrderText] =
    useState("");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 8,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const handleCreateOrder = async () => {

    if (createOrderMutation.isPending) return;

    if (!customerName.trim()) {
      return showError("Please enter a customer name.");
    }

    if (
      source === "text" &&
      !orderText.trim()
    ) {
      return showError(
        "Please paste an order message."
      );
    }

    if (
      source !== "text" &&
      !file
    ) {
      return showError(
        "Please select an order image."
      );
    }

    try {

      const formData = new FormData();

      formData.append(
        "customerName",
        customerName.trim()
      );

      formData.append(
        "notes",
        notes.trim()
      );

      formData.append(
        "source",
        source
      );

      if (source === "text") {

        formData.append(
          "orderText",
          orderText.trim()
        );

      } else {

        formData.append(
          "file",
          file
        );

      }

      const data =
        await createOrderMutation.mutateAsync(
          formData
        );

      showSuccess(
        "Order created successfully."
      );

      navigate(
        `/orders/${data.order._id}`
      );

    } catch (error) {

      console.error(error);

      showError(
        error?.response?.data?.message ||
        "Failed to create order."
      );

    }

  };

  return (

    <div className="pb-28">

      <CreateOrderHeader />

      <div
        className="
          mx-5
          mt-6
          rounded-[36px]
          border
          px-8
          py-6
          shadow-sm
        "
      >

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >

          <motion.div variants={item}>

            <CustomerInput
              value={customerName}
              onChange={setCustomerName}
            />

            <OrderSourceSelector
              source={source}
              setSource={(value) => {

                setSource(value);

                setFile(null);

                setOrderText("");

              }}
            />

          </motion.div>

          <motion.div variants={item}>

            {(source === "upload" ||
              source === "camera") && (

              <UploadBox
                file={file}
                setFile={setFile}
                cameraOnly={
                  source === "camera"
                }
              />

            )}

            {source === "text" && (

              <div className="mt-6">

                <label className="text-[15px] font-bold text-gray-700">

                  Paste Order Message

                </label>

                <p className="mt-1 text-sm text-gray-500">

                  Paste a WhatsApp message,
                  notes, or any text order.

                </p>

                <textarea
                  rows={10}
                  value={orderText}
                  onChange={(e) =>
                    setOrderText(
                      e.target.value
                    )
                  }
                  placeholder={`Rahul Caterers

Tomato - 20 kg
Potato - 10 kg
Onion - 5 kg
Green Chilli - 2 kg
Coriander - 10 bunch
Lemon - 100 pcs`}
                  className="
                    mt-3
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    p-4
                    font-medium
                    resize-y
                    focus:border-primary
                    focus:outline-none
                  "
                />

                <p className="mt-2 text-right text-xs text-gray-400">

                  {orderText.length} characters

                </p>

              </div>

            )}

          </motion.div>

          <motion.div variants={item}>

            <NotesInput
              value={notes}
              onChange={setNotes}
            />

          </motion.div>

          <motion.div variants={item}>

            <CreateButton
              loading={
                createOrderMutation.isPending
              }
              onClick={
                handleCreateOrder
              }
            />

          </motion.div>

        </motion.div>

      </div>

    </div>

  );

}

export default CreateOrder;