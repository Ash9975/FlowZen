import {
    CheckCircle2,
    Sparkles,
    ClipboardPlus,
    Pencil,
    Trash2,
    ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const icons = {
    completed: CheckCircle2,
    created: ClipboardPlus,
    updated: Pencil,
    deleted: Trash2,
    ai: Sparkles,
};

const colors = {
    completed: "bg-green-100 text-green-600",
    created: "bg-blue-100 text-blue-600",
    updated: "bg-orange-100 text-orange-600",
    deleted: "bg-red-100 text-red-600",
    ai: "bg-purple-100 text-purple-600",
};

function ActivityItem({ activity }) {

    const navigate = useNavigate();

    const Icon = icons[activity.type] || ClipboardPlus;

    const color =
        colors[activity.type] ||
        "bg-gray-100 text-gray-600";

    return (

        <motion.div

            whileHover={{ y: -2 }}

            whileTap={{ scale: .98 }}

            onClick={() =>
                navigate(`/orders/${activity.orderId}`)
            }

            className="
                flex

                cursor-pointer

                items-start

                gap-4

                rounded-3xl

                border

                border-[#EEF3E3]

                bg-white

                p-4

                transition

                hover:shadow-md
            "
        >

            <div className={`rounded-2xl p-3 ${color}`}>

                <Icon size={22} />

            </div>

            <div className="flex-1">

                <h3 className="font-semibold text-[#23330F]">

                    {activity.title}

                </h3>

                <p className="mt-1 text-sm text-[#667085]">

                    {activity.description}

                </p>

                <p className="mt-2 text-xs text-gray-400">

                    {activity.time}

                </p>

            </div>

            <ChevronRight
                size={18}
                className="mt-1 text-gray-400"
            />

        </motion.div>

    );
}

export default ActivityItem;