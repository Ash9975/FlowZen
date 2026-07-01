import { motion } from "framer-motion";
import { ClipboardList, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function EmptyOrders() {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.4,
            }}
            className="
                mt-10

                rounded-3xl

                border
                border-dashed
                border-[#DCE8B8]

                bg-[#FBFCF7]

                px-6
                py-12

                text-center
            "
        >
            <div
                className="
                    mx-auto

                    flex
                    h-20
                    w-20

                    items-center
                    justify-center

                    rounded-full

                    bg-[#EEF6D8]
                "
            >
                <ClipboardList
                    size={38}
                    className="text-[#7F9E2F]"
                />
            </div>

            <h2
                className="
                    mt-6

                    text-2xl
                    font-bold

                    text-[#23330F]
                "
            >
                No Orders Yet
            </h2>

            <p
                className="
                    mt-3

                    text-sm

                    leading-6

                    text-[#667085]
                "
            >
                Start by creating your first packing order.
                AI will help generate the checklist automatically.
            </p>

            <button
                onClick={() => navigate("/create")}
                className="
                    mt-8

                    inline-flex
                    items-center
                    gap-2

                    rounded-2xl

                    bg-[#7F9E2F]

                    px-6
                    py-3

                    font-semibold
                    text-white

                    shadow-lg
                    shadow-[#7F9E2F]/20

                    transition

                    hover:scale-[1.02]
                    active:scale-95
                "
            >
                <Plus size={18} />

                Create Order
            </button>
        </motion.div>
    );
}

export default EmptyOrders;