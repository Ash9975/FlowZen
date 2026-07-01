import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import api from "../api/axios";

import ActivityHeader from "../components/activity/ActivityHeader";
import ActivityList from "../components/activity/ActivityList";
import ActivitySkeleton from "../components/activity/ActivitySkeleton";
import EmptyActivity from "../components/activity/EmptyActivity";

import BottomNav from "../components/dashboard/BottomNav";

function Activity() {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadActivity = async () => {
            try {
                const { data } = await api.get("/activity");

                setActivities(data.activities);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        loadActivity();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .35 }}
            className="min-h-screen"
        >
            <div className="mx-auto max-w-md min-h-screen bg-white px-6 pt-8 pb-28">

                <ActivityHeader />

                {
                    loading ? (
                        <ActivitySkeleton />
                    ) : activities.length === 0 ? (
                        <EmptyActivity />
                    ) : (
                        <ActivityList
                            activities={activities}
                        />
                    )
                }

            </div>

            <BottomNav />
        </motion.div>
    );
}

export default Activity;