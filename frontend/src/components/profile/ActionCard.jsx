import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

function ActionCard({
    icon: Icon,
    title,
    subtitle,
    onClick,
}) {
    return (
        <motion.button
            whileHover={{
                x: 4,
            }}
            whileTap={{
                scale: .98,
            }}
            onClick={onClick}
            className="
        w-full

        flex
        items-center
        justify-between

        rounded-3xl

        border
        border-[#EEF2E5]

        bg-white

        px-5
        py-5

        shadow-sm
      "
        >
            <div className="flex items-center gap-4">

                <div
                    className="
            h-12
            w-12

            rounded-2xl

            bg-[#F4F8EA]

            flex
            items-center
            justify-center
          "
                >
                    <Icon
                        size={22}
                        className="text-[#7F9E2F]"
                    />
                </div>

                <div className="text-left">

                    <h3 className="font-semibold text-[#1F2937]">
                        {title}
                    </h3>

                    <p className="text-sm text-gray-500">
                        {subtitle}
                    </p>

                </div>

            </div>

            <ChevronRight className="text-gray-400" />

        </motion.button>
    );
}

export default ActionCard;