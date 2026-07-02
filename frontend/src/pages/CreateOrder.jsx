import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../api/axios";

import CreateOrderHeader from "../components/create-order/CreateOrderHeader";
import CustomerInput from "../components/create-order/CustomerInput";
import UploadBox from "../components/create-order/UploadBox";
import NotesInput from "../components/create-order/NotesInput";
import CreateButton from "../components/create-order/CreateButton";

function CreateOrder() {
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState("");
  const [notes, setNotes] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
      },
    },
  };

  const handleCreateOrder = async () => {
    try {
      if (!customerName.trim()) {
        return alert("Enter customer name");
      }

      if (!file) {
        return alert("Upload order image");
      }

      setLoading(true);

      const formData = new FormData();

      formData.append(
        "customerName",
        customerName
      );

      formData.append(
        "file",
        file
      );

      const orderRes = await api.post(
        "/orders",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      const orderId =
        orderRes.data.order._id;

      // AI Processing
      await api.post(
        `/orders/${orderId}/process`
      );

      navigate(`/orders/${orderId}`);

    } catch (error) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
        "Failed to create order"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 25,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="mx-auto max-w-md min-h-screen bg-white pb-28"
    >
      <CreateOrderHeader />

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.15,
        }}
        className="mx-5 px-8 py-6 border-1 rounded-[46px] shadow-lg"
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
              loading={loading}
              onClick={handleCreateOrder}
            />
          </motion.div>
        </motion.div>
      </motion.div>

    </motion.div>
  );
}

export default CreateOrder;