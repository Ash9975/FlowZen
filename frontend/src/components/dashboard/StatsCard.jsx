import {
    Clock3,
    LoaderCircle,
    CheckCircle2,
    PackageCheck,
} from "lucide-react";

import { motion } from "framer-motion";

const cards = [

    {
        title: "Pending",
        valueKey: "pendingOrders",
        icon: Clock3,
        bg: "bg-orange-50",
        border: "border-orange-200",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
    },

    {
        title: "Completed",
        valueKey: "completedOrders",
        icon: CheckCircle2,
        bg: "bg-green-50",
        border: "border-green-200",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
    },

    {
        title: "In Progress",
        valueKey: "inProgressOrders",
        icon: LoaderCircle,
        bg: "bg-blue-50",
        border: "border-blue-200",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
    },

    {
        title: "Items Packed",
        valueKey: "itemsPacked",
        icon: PackageCheck,
        bg: "bg-[#F2F8DF]",
        border: "border-primary/20",
        iconBg: "bg-primary/10",
        iconColor: "text-primary",
    },

];

function StatsCard({ stats }) {

    return (

        <div className="mt-8 grid grid-cols-2 gap-4">

            {cards.map((card) => {

                const Icon = card.icon;

                return (

                    <motion.div

                        key={card.title}

                        whileHover={{
                            y: -3,
                        }}

                        whileTap={{
                            scale: 0.98,
                        }}

                        className={`
                            ${card.bg}
                            ${card.border}

                            rounded-3xl
                            border

                            p-5

                            shadow-sm
                            transition-all
                        `}

                    >

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm font-medium text-gray-500">

                                    {card.title}

                                </p>

                                <h2 className="mt-2 text-3xl font-bold text-gray-900">

                                    {stats?.[card.valueKey] ?? 0}

                                </h2>

                            </div>

                            <div
                                className={`
                                    ${card.iconBg}

                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center

                                    rounded-2xl
                                `}
                            >

                                <Icon
                                    size={24}
                                    className={card.iconColor}
                                />

                            </div>

                        </div>

                    </motion.div>

                );

            })}

        </div>

    );

}

export default StatsCard;