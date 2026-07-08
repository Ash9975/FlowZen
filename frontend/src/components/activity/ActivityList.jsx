import { motion } from "framer-motion";

import ActivityItem from "./ActivityItem";

function ActivityList({ activities }) {

    return (

        <motion.div

            initial={{
                opacity: 0,
            }}

            animate={{
                opacity: 1,
            }}

            transition={{
                duration: 0.3,
            }}

            className="space-y-4"

        >

            {activities.map((activity, index) => (

                <motion.div

                    key={activity._id}

                    initial={{
                        opacity: 0,
                        y: 20,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        delay: index * 0.05,
                    }}

                >

                    <ActivityItem
                        activity={activity}
                    />

                </motion.div>

            ))}

        </motion.div>

    );

}

export default ActivityList;