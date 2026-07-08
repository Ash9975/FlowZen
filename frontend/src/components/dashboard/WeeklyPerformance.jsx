import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

import { motion } from "framer-motion";

function WeeklyPerformance({ data = [] }) {

    const chartData = Array.from({ length: 7 }, (_, index) => {

        const date = new Date();

        date.setDate(date.getDate() - (6 - index));

        const key = date.toISOString().split("T")[0];

        const found = data.find(
            item => item._id === key
        );

        return {

            day: date.toLocaleDateString("en-IN", {
                weekday: "short",
            }),

            completed: found?.completed ?? 0,

        };

    });

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
                rounded-3xl
                border
                border-gray-100
                bg-white
                p-6
                shadow-sm
            "

        >

            <div className="mb-5">

                <h2 className="text-xl font-bold text-gray-900">

                    Weekly Performance

                </h2>

                <p className="mt-1 text-sm text-gray-500">

                    Orders completed in the last 7 days

                </p>

            </div>

            <div className="h-64">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <BarChart
                        data={chartData}
                    >

                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            axisLine={false}
                        />

                        <Tooltip />

                        <Bar
                            dataKey="completed"
                            radius={[8, 8, 0, 0]}
                            fill="#7F9E2F"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </motion.div>

    );

}

export default WeeklyPerformance;