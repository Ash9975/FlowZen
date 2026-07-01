import { motion } from "framer-motion";

function StatsCard({
    icon: Icon,
    title,
    value,
    color = "#7F9E2F",
}) {

    return (
        <motion.div
            whileHover={{
                y: -4,
            }}
            className="
        rounded-3xl

        border
        border-[#EEF2E5]

        bg-white

        p-5

        shadow-sm
      "
        >

            <Icon
                size={24}
                style={{
                    color,
                }}
            />

            <h3 className="mt-5 text-sm text-gray-500">

                {title}

            </h3>

            <p
                className="mt-2 text-3xl font-black"
                style={{
                    color,
                }}
            >
                {value}
            </p>

        </motion.div>
    );
}

export default StatsCard;