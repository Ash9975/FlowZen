import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { useCreateOrder } from "../hooks/useCreateOrder";

import CreateOrderHeader from "../components/create-order/CreateOrderHeader";
import CustomerInput from "../components/create-order/CustomerInput";
import UploadBox from "../components/create-order/UploadBox";
import NotesInput from "../components/create-order/NotesInput";
import CreateButton from "../components/create-order/CreateButton";

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
      return showError("Enter customer name");
    }

    if (!file) {
      return showError("Upload an order image");
    }

    try {

      const formData = new FormData();

      formData.append(
        "customerName",
        customerName.trim()
      );

      formData.append(
        "file",
        file
      );

      formData.append(
        "notes",
        notes.trim()
      );

      const data =
        await createOrderMutation.mutateAsync(
          formData
        );

      showSuccess("Order created successfully.");

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

          </motion.div>

          <motion.div variants={item}>

            <UploadBox
              file={file}
              setFile={setFile}
            />

          </motion.div>

          <motion.div variants={item}>

            <NotesInput
              value={notes}
              onChange={setNotes}
            />

          </motion.div>

          <motion.div variants={item}>

            <CreateButton
              loading={createOrderMutation.isPending}
              onClick={handleCreateOrder}
            />

          </motion.div>

        </motion.div>

      </div>

    </div>

  );

}

export default CreateOrder;