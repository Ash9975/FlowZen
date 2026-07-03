import { motion } from "framer-motion";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCard";
import RecentOrders from "../components/dashboard/RecentOrders";

import StatsSkeleton from "../components/dashboard/StatsSkeleton";
import RecentOrdersSkeleton from "../components/dashboard/RecentOrdersSkeleton";

import {
    useDashboardStats,
    useRecentOrders,
} from "../hooks/useDashboard";

function Dashboard() {

    const {
        data: stats,
        isLoading: statsLoading,
        isError: statsError,
        error: statsErrorMessage,
    } = useDashboardStats();

    const {
        data: orders,
        isLoading: ordersLoading,
        isError: ordersError,
        error: ordersErrorMessage,
    } = useRecentOrders();

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 6,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut",
            },
        },
    };

    if (statsError || ordersError) {
        return (
            <div className="flex h-[60vh] items-center justify-center text-center">
                <div>
                    <h2 className="text-xl font-bold">
                        Something went wrong
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        {statsErrorMessage?.message ||
                            ordersErrorMessage?.message}
                    </p>
                </div>
            </div>
        );
    }

    return (

        <div className="px-6 pt-8 pb-28">

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
            >

                <motion.div variants={item}>
                    <DashboardHeader />
                </motion.div>

                <motion.div variants={item}>
                    {statsLoading ? (
                        <StatsSkeleton />
                    ) : (
                        <StatsCards stats={stats} />
                    )}
                </motion.div>

                <motion.div variants={item}>
                    {ordersLoading ? (
                        <RecentOrdersSkeleton />
                    ) : (
                        <RecentOrders orders={orders} />
                    )}
                </motion.div>

            </motion.div>

        </div>

    );

}

export default Dashboard;