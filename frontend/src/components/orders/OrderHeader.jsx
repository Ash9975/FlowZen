import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function OrderHeader() {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: .35,
            }}
            className="mb-7"
        >
            <button
                onClick={() => navigate(-1)}
                className="
                    mb-5

                    flex
                    h-11
                    w-11

                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-[#E6EDD3]

                    bg-[#FAFCF5]

                    transition

                    hover:bg-[#F3F8E7]
                "
            >
                <ArrowLeft
                    size={20}
                    className="text-[#2C3A12]"
                />
            </button>

            <h1
                className="
                    text-4xl
                    font-black
                    tracking-tight
                    text-[#23330F]
                "
            >
                Orders
            </h1>

            <p
                className="
                    mt-2

                    text-base

                    text-[#667085]
                "
            >
                Manage all your packing orders.
            </p>
        </motion.div>
    );
}

export default OrderHeader;