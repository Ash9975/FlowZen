import ActivityItem from "./ActivityItem";

function ActivityList({ activities }) {
    return (
        <div className="space-y-2">

            {activities.map(activity => (

                <ActivityItem
                    key={activity._id}
                    activity={activity}
                />

            ))}

        </div>
    );
}

export default ActivityList;