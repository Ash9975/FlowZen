import { motion } from "framer-motion";

import OrderCard from "../dashboard/OrderCard";

function OrdersList({
    orders,
}) {
    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: .08,
                    },
                },
            }}
            className="space-y-5"
        >
            {orders.map((order) => (
                <motion.div
                    key={order._id}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 20,
                        },
                        show: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                >
                    <OrderCard
                        order={order}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
}

export default OrdersList;