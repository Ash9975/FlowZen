import { useActivity } from "../hooks/useActivity";

import ActivityHeader from "../components/activity/ActivityHeader";
import ActivityList from "../components/activity/ActivityList";
import ActivitySkeleton from "../components/activity/ActivitySkeleton";
import EmptyActivity from "../components/activity/EmptyActivity";

function Activity() {

    const {
        data: activities = [],
        isLoading,
        isError,
        error,
    } = useActivity();

    if (isError) {
        return (
            <div className="flex h-[70vh] items-center justify-center">
                <div className="text-center">

                    <h2 className="text-lg font-semibold">
                        Failed to load activity
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        {error.message}
                    </p>

                </div>
            </div>
        );
    }

    return (

        <div
            className="
                px-6
                pt-8
                pb-28
            "
        >

            <ActivityHeader />

            {
                isLoading ? (

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

    );

}

export default Activity;