import { motion } from "framer-motion";

const tabs = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Pending",
        value: "pending",
    },
    {
        label: "Completed",
        value: "completed",
    },
];

function FilterTabs({
    value,
    onChange,
}) {
    return (
        <div className="mb-7">
            <div
                className="
                    flex

                    rounded-2xl

                    bg-[#F5F8ED]

                    p-1
                "
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => onChange(tab.value)}
                        className="
                            relative

                            flex-1

                            rounded-xl

                            py-3

                            text-sm
                            font-semibold

                            transition
                        "
                    >
                        {value ===
                            tab.value && (
                                <motion.div
                                    layoutId="activeFilter"

                                    transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 30,
                                    }}

                                    className="
                                        absolute
                                        inset-0

                                        rounded-xl

                                        bg-white

                                        shadow-sm
                                    "
                                />
                            )}

                        <span
                            className={`
                                relative
                                z-10

                                ${value ===
                                    tab.value
                                    ? "text-[#7F9E2F]"
                                    : "text-[#667085]"
                                }
                            `}
                        >
                            {tab.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default FilterTabs;