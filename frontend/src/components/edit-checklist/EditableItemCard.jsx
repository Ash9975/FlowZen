import { motion } from "framer-motion";
import { Trash2, Package2, ChevronDown } from "lucide-react";


function EditableItemCard({
    item,
    index,
    onChange,
    onDelete,
}) {
    const updateField = (field, value) => {
        onChange(item._id, field, value);
    };

    return (
        <motion.div
            layout
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                scale: 0.95,
            }}
            transition={{
                duration: 0.25,
            }}
            className="
      rounded-3xl
      bg-white
      border
      border-gray-200
      shadow-sm
      p-5
      "
        >
            {/* Header */}

            <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <div
                        className="
            h-11
            w-11
            rounded-2xl
            bg-primary/10

            flex
            items-center
            justify-center
            "
                    >
                        <Package2
                            size={20}
                            className="text-primary"
                        />
                    </div>

                    <div>

                        <p className="text-xs uppercase tracking-wider text-gray-400">
                            Item {index + 1}
                        </p>

                        <h3 className="font-semibold text-gray-800">
                            Edit Product
                        </h3>

                    </div>

                </div>

                <button
                    onClick={() => onDelete(item._id)}
                    className="
          h-10
          w-10

          rounded-xl

          bg-red-50
          text-red-500

          transition

          hover:bg-red-100
          active:scale-95
          "
                >
                    <Trash2
                        size={18}
                        className="mx-auto"
                    />
                </button>

            </div>

            {/* Item Name */}

            <div className="mt-6">

                <label className="mb-2 block text-sm font-medium text-gray-600">
                    Item Name
                </label>

                <input
                    value={item.itemName}
                    onChange={(e) =>
                        updateField(
                            "itemName",
                            e.target.value
                        )
                    }
                    placeholder="Enter item"
                    className="
          w-full
          rounded-2xl
          border
          border-gray-200

          px-4
          py-3

          outline-none

          transition

          focus:border-primary
          focus:ring-4
          focus:ring-primary/10
          "
                />

            </div>

            {/* Quantity + Unit */}

            <div className="mt-5 grid grid-cols-2 gap-4">

                <div>

                    <label className="mb-2 block text-sm font-medium text-gray-600">
                        Quantity
                    </label>

                    <input
                        type="number"
                        min="0"
                        value={item.quantity}
                        onChange={(e) =>
                            updateField(
                                "quantity",
                                e.target.value
                            )
                        }
                        className=" w-full
            rounded-2xl
            border
            border-gray-200

            text-center
            font-bold
            py-3

            outline-none

            transition

            focus:border-primary
            focus:ring-4
            focus:ring-primary/10
            "
                    />

                </div>

                <div>

                    <label className="mb-2 block text-sm font-medium text-gray-600">
                        Unit
                    </label>

                    <div className="relative">
                        <select
                            value={item.unit}
                            onChange={(e) => updateField("unit", e.target.value)}
                            className="w-full appearance-none rounded-2xl border border-gray-200 bg-white font-bold px-13 py-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                        >
                            <option value="kg">kg</option>
                            <option value="g">g</option>
                            <option value="L">L</option>
                            <option value="ml">ml</option>
                            <option value="pcs">pcs</option>
                            <option value="dozen">dozen</option>
                            <option value="box">box</option>
                            <option value="packet">packet</option>
                            <option value="bag">bag</option>
                            <option value="bundle">bundle</option>
                            <option value="noc">noc</option>
                        </select>

                        <ChevronDown
                            size={20}
                            className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 text-gray-500"
                        />
                    </div>

                </div>

            </div>

        </motion.div>
    );
}

export default EditableItemCard;