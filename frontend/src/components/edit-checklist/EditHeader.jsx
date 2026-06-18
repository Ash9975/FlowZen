import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function EditHeader() {
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{
        y: -20,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className="
      sticky
      top-0
      z-50

      border-b
      border-gray-100

      bg-white/90
      backdrop-blur-md
      "
    >
      <div className="mx-auto flex max-w-md items-center gap-4 px-5 py-4">

        <button
          onClick={() => navigate(-1)}
          className="
          rounded-xl
          p-2
          transition
          hover:bg-gray-100
          active:scale-95
          "
        >
          <ArrowLeft size={24} />
        </button>

        <div>

          <h1 className="text-2xl font-bold text-gray-900">
            Edit Checklist
          </h1>

          <p className="text-sm text-gray-500">
            Correct AI mistakes before packing
          </p>

        </div>

      </div>
    </motion.header>
  );
}

export default EditHeader;