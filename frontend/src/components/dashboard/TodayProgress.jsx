import { motion } from "framer-motion";

function TodayProgress({ stats }) {

    const progress = stats?.todayProgress ?? 0;
    const completed = stats?.completedToday ?? 0;
    const total = stats?.todayOrders ?? 0;

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 15,
            }}

            animate={{
                opacity: 1,
                y: 0,
            }}

            className="
                mt-8
                rounded-3xl
                bg-white
                p-6
                shadow-sm
                border
                border-gray-100
            "

        >

            <div className="flex items-center justify-between">

                <div>

                    <h2 className="text-xl font-bold text-gray-900">

                        Today's Progress

                    </h2>

                    <p className="mt-1 text-sm text-gray-500">

                        {completed} of {total} orders completed

                    </p>

                </div>

                <span className="text-lg font-bold text-primary">

                    {progress}%

                </span>

            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-200">

                <motion.div

                    initial={{
                        width: 0,
                    }}

                    animate={{
                        width: `${progress}%`,
                    }}

                    transition={{
                        duration: 0.8,
                    }}

                    className="h-full rounded-full bg-primary"

                />

            </div>

            <p className="mt-4 text-sm text-gray-500">

                {progress === 100
                    ? "Excellent! All today's orders are completed."
                    : total === 0
                        ? "No orders created today."
                        : `${total - completed} orders remaining today.`}

            </p>

        </motion.div>

    );

}

export default TodayProgress;