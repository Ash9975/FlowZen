import { ClipboardList, Clock } from "lucide-react";
import { motion } from "framer-motion";

function StatsCard({ stats }) {
    return (
        <div className="grid grid-cols-2 gap-5 mt-10">
            <motion.div
                whileHover={{ y: -4 }}
                className="flex flex-col items-center justify-center bg-[#F2F8DF] h-[120px] rounded-[28px] p-6 "  >
                <div className="flex items-center justify-center gap-2">
                    <ClipboardList
                        className="text-primary mt-2"
                        size={28}
                    />

                    <h3 className="mt-3 text-4xl text-muted-foreground font-bold">
                        {stats?.totalOrders || 0}
                    </h3>
                </div>

                <div>
                    <p className="text-xl text-center font-extrabold text-muted-foreground mt-1 leading-5">
                        Total Orders
                    </p>
                </div>
            </motion.div>

            <motion.div
                whileHover={{ y: -4 }}
                className=" bg-[#FAF5DD] h-[120px] rounded-[28px] p-6 flex flex-col items-center justify-center"
            >
                <div className="flex items-center justify-items-start gap-2">
                    <Clock
                        className="text-orange-500 mt-2 "
                        size={28}
                    />

                    <h3 className="mt-3 text-4xl text-muted-foreground font-bold">
                        {stats?.pendingOrders || 0}
                    </h3>
                </div>

                <div>
                    <p className="text-xl text-muted-foreground mt-1 font-extrabold">
                        Pending
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default StatsCard;