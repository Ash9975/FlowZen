import { motion } from "framer-motion";

import { useProfile } from "../hooks/useProfile";
import {
    useDashboardStats,
    useRecentOrders,
} from "../hooks/useDashboard";

import DashboardGreeting from "../components/dashboard/DashboardGreeting";
import TodayProgress from "../components/dashboard/TodayProgress";
import QuickActions from "../components/dashboard/QuickActions";
import StatsCards from "../components/dashboard/StatsCard";
import RecentOrders from "../components/dashboard/RecentOrders";
import WeeklyPerformance from "../components/dashboard/WeeklyPerformance";
import { useWeeklyPerformance } from "../hooks/useWeeklyPerformance.js";

import StatsSkeleton from "../components/dashboard/StatsSkeleton";
import RecentOrdersSkeleton from "../components/dashboard/RecentOrdersSkeleton";
import QueryErrorState from "../components/common/QueryErrorState";

function Dashboard() {

    const { data: user } = useProfile();

    const {
        data: stats,
        isLoading: statsLoading,
        isError: statsError,
        error: statsErrorMessage,
        refetch: refetchStats,
        isRefetching: statsRefetching,
    } = useDashboardStats();

  

    const {
        data: orders,
        isLoading: ordersLoading,
        isError: ordersError,
        error: ordersErrorMessage,
        refetch: refetchOrders,
        isRefetching: ordersRefetching,
    } = useRecentOrders();

    const {
        data: weeklyPerformance,
        isLoading: weeklyLoading,
    } = useWeeklyPerformance();

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 12,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.25,
                ease: "easeOut",
            },
        },
    };

    if (statsError || ordersError) {

        return (

            <QueryErrorState
                title="Failed to load dashboard"
                message={
                    statsErrorMessage?.message ||
                    ordersErrorMessage?.message ||
                    "Something went wrong."
                }
                loading={
                    statsRefetching ||
                    ordersRefetching
                }
                onRetry={() => {

                    refetchStats();
                    refetchOrders();

                }}
            />

        );

    }

    return (

        <div className="pb-28 pt-7">

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-6 px-5"
            >

                {/* Greeting */}

                <motion.div variants={item}>

                    <DashboardGreeting
                        userName={user?.name}
                    />

                </motion.div>

                {/* Today's Progress */}

                <motion.div variants={item}>

                    {statsLoading ? (

                        <StatsSkeleton />

                    ) : (

                        <TodayProgress
                            stats={stats}
                        />

                    )}

                </motion.div>

                {/* Quick Actions */}

                <motion.div variants={item}>

                    <QuickActions />

                </motion.div>

                {/* Stats */}

                <motion.div variants={item}>

                    {statsLoading ? (

                        <StatsSkeleton />

                    ) : (

                        <StatsCards
                            stats={stats}
                        />

                    )}

                </motion.div>

                {/* Weekly Performance */}

                <motion.div variants={item}>

                    {!weeklyLoading && (

                        <WeeklyPerformance
                            data={weeklyPerformance}
                        />

                    )}

                </motion.div>
                {/* Next Component */}

                {/* Recent Orders */}

                <motion.div variants={item}>

                    {ordersLoading ? (

                        <RecentOrdersSkeleton />

                    ) : (

                        <RecentOrders
                            orders={orders}
                        />

                    )}

                </motion.div>

                {/* Recent Activity */}
                {/* Next Component */}

            </motion.div>

        </div>

    );

}

export default Dashboard;