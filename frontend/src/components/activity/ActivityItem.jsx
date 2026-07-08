import {
    ClipboardPlus,
    Package,
    CheckCircle2,
    Trash2,
} from "lucide-react";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import { formatActivityTime } from "../../lib/formatActivityTime";

const activityConfig = {

    "order-created": {

        title: "New packing order created",

        icon: ClipboardPlus,

        iconBg: "bg-blue-100",

        iconColor: "text-blue-600",

    },

    "packing-started": {

        title: "Packing started",

        icon: Package,

        iconBg: "bg-orange-100",

        iconColor: "text-orange-600",

    },

    "order-completed": {

        title: "Packing completed",

        icon: CheckCircle2,

        iconBg: "bg-green-100",

        iconColor: "text-green-600",

    },

    "order-deleted": {

        title: "Order deleted",

        icon: Trash2,

        iconBg: "bg-red-100",

        iconColor: "text-red-600",

    },

};

function ActivityItem({ activity }) {

    const navigate = useNavigate();

    const config =
        activityConfig[activity.type] ??
        activityConfig["order-created"];

    const Icon = config.icon;

    return (

        <motion.div

            whileHover={{
                y: -2,
            }}

            whileTap={{
                scale: 0.98,
            }}

            onClick={() =>
                navigate(`/orders/${activity.order}`)
            }

            className="
                cursor-pointer

                rounded-2xl

                border
                border-[#EEF3E3]

                bg-white

                p-4

                shadow-sm

                transition-all

                hover:shadow-md
            "

        >

            <div className="flex items-start gap-3">

                <div
                    className={`
                        ${config.iconBg}

                        flex
                        h-10
                        w-10

                        items-center
                        justify-center

                        rounded-xl
                        shrink-0
                    `}
                >

                    <Icon
                        size={18}
                        className={config.iconColor}
                    />

                </div>

                <div className="min-w-0 flex-1">

                    <p
                        className="
                            text-[15px]
                            font-semibold
                            text-[#23330F]
                        "
                    >

                        {activity.customerName}

                    </p>

                    <p
                        className="
                            mt-0.5

                            text-sm

                            text-[#667085]
                        "
                    >

                        {config.title}

                    </p>

                    <p
                        className="
                            mt-2

                            text-xs

                            text-gray-400
                        "
                    >

                        {formatActivityTime(
                            activity.createdAt
                        )}

                    </p>

                </div>

            </div>

        </motion.div>

    );

}

export default ActivityItem;