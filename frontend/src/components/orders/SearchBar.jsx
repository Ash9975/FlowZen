import { Search, X } from "lucide-react";
import { motion } from "framer-motion";

function SearchBar({
    value,
    onChange,
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                delay: .1,
            }}
            className="relative mb-6"
        >
            <Search
                size={20}
                className="
                    absolute

                    left-5
                    top-1/2

                    -translate-y-1/2

                    text-[#98A2B3]
                "
            />

            <input
                type="text"
                placeholder="Search orders..."
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
                className="
                    h-14
                    w-full

                    rounded-2xl

                    border
                    border-[#E6EDD3]

                    bg-[#FCFDF9]

                    pl-14
                    pr-12

                    text-[15px]

                    outline-none

                    transition

                    placeholder:text-[#98A2B3]

                    focus:border-[#7F9E2F]
                    focus:ring-4
                    focus:ring-[#7F9E2F]/10
                "
            />

            {value && (
                <button
                    onClick={() => onChange("")}
                    className="
                        absolute

                        right-4
                        top-1/2

                        -translate-y-1/2

                        rounded-full

                        p-1

                        hover:bg-[#EEF5DC]
                    "
                >
                    <X
                        size={16}
                        className="text-[#98A2B3]"
                    />
                </button>
            )}
        </motion.div>
    );
}

export default SearchBar;