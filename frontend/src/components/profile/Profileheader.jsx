import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ProfileHeader() {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
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

                    hover:bg-[#F3F8E7]

                    transition
                "
            >
                <ArrowLeft
                    size={20}
                    className="text-[#23330F]"
                />
            </button>

            <h1 className="text-4xl font-black tracking-tight text-[#23330F]">
                Profile
            </h1>

            <p className="mt-2 text-[#667085]">
                Manage your FlowZen account
            </p>
        </motion.div>
    );
}

export default ProfileHeader;