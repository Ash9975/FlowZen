import { motion } from "framer-motion";
import {
    Settings,
    Shield,
    CircleHelp,
    ChevronRight,
} from "lucide-react";

const actions = [
    {
        title: "Account Settings",
        subtitle: "Manage your preferences",
        icon: Settings,
    },
    {
        title: "Privacy & Security",
        subtitle: "Password & account protection",
        icon: Shield,
    },
    {
        title: "Help & Support",
        subtitle: "FAQs and contact us",
        icon: CircleHelp,
    },
];

function QuickActions() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 25,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            className="
                rounded-3xl
                border
                border-[#EEF2E5]
                bg-white
                shadow-sm
                overflow-hidden
            "
        >
            <div className="px-6 py-5">

                <h2 className="text-lg font-bold text-[#1F2937]">

                    Quick Actions

                </h2>

                <p className="mt-1 text-sm text-gray-500">

                    Manage your FlowZen account.

                </p>

            </div>

            {actions.map((item, index) => {

                const Icon = item.icon;

                return (

                    <button
                        key={item.title}
                        className={`
                            w-full

                            flex
                            items-center
                            justify-between

                            px-6
                            py-5

                            transition

                            hover:bg-[#F8FAF4]

                            ${index !== actions.length - 1
                                ? "border-b border-[#EEF2E5]"
                                : ""
                            }
                        `}
                    >

                        <div className="flex items-center gap-4">

                            <div
                                className="
                                    flex
                                    h-11
                                    w-11

                                    items-center
                                    justify-center

                                    rounded-2xl

                                    bg-[#F6F9EE]
                                "
                            >

                                <Icon
                                    size={20}
                                    className="text-[#7F9E2F]"
                                />

                            </div>

                            <div className="text-left">

                                <h3 className="font-semibold text-[#1F2937]">

                                    {item.title}

                                </h3>

                                <p className="text-sm text-gray-500">

                                    {item.subtitle}

                                </p>

                            </div>

                        </div>

                        <ChevronRight
                            size={20}
                            className="text-gray-400"
                        />

                    </button>

                );

            })}

        </motion.div>
    );
}

export default QuickActions;