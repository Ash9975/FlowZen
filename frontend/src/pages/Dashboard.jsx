import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import api from "../api/axios";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCard";
import RecentOrders from "../components/dashboard/RecentOrders";
import BottomNav from "../components/dashboard/BottomNav";

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [statsRes, ordersRes] =
          await Promise.all([
            api.get("/dashboard/stats"),
            api.get("/dashboard/recent-orders"),
          ]);

        setStats(statsRes.data.stats);
        setOrders(ordersRes.data.orders);

      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
      },
    },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="min-h-screen "
    >
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
          delay: 0.1,
        }}
        className="mx-auto max-w-md min-h-screen bg-white px-6 pt-8 pb-28 shadow-sm"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <DashboardHeader />
          </motion.div>

          <motion.div variants={item}>
            <StatsCards stats={stats} />
          </motion.div>

          <motion.div variants={item}>
            <RecentOrders orders={orders} />
          </motion.div>
        </motion.div>

        <BottomNav />
      </motion.div>
    </motion.div>
  );
}

export default Dashboard;