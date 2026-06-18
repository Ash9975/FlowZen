import { ArrowLeft, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function CreateOrderHeader() {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.5,
            }}
            className="relative overflow-hidden rounded-b-[46px] bg-primary px-6 pt-12 pb-6 mb-5">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-hover opacity-50" />

            <div className="relative flex items-center justify-start gap-3 text-white">

                <button
                    onClick={() => navigate(-1)}
                    className="flex h-10 w-10 items-center border-1 border-white justify-center rounded-full bg-white/10 backdrop-blur-sm"
                >
                    <ArrowLeft size={20} />
                </button>

                <h1 className="text-xl font-bold">
                    Create New Order
                </h1>

            </div>

        </motion.div>
    );
}

export default CreateOrderHeader;