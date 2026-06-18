import { Plus } from "lucide-react";
import { motion } from "framer-motion";

function AddItemButton({ onAdd }) {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onAdd}
      className="w-full mt-6 rounded-3xl border-2 border-dashed border-primary/40 bg-primary/5 py-5 transition hover:bg-primary/10"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg">
          <Plus size={28} />
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            Add New Item
          </h3>

          <p className="text-sm text-gray-500">
            Add products missed by AI
          </p>
        </div>
      </div>
    </motion.button>
  );
}

export default AddItemButton;