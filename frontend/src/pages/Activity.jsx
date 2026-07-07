import { useActivity } from "../hooks/useActivity";

import ActivityHeader from "../components/activity/ActivityHeader";
import ActivityList from "../components/activity/ActivityList";
import ActivitySkeleton from "../components/activity/ActivitySkeleton";
import EmptyActivity from "../components/activity/EmptyActivity";
import QueryErrorState from "../components/common/QueryErrorState";
function Activity() {

    const {
        data: activities = [],
        isLoading,
        isError,
        error,
    } = useActivity();

    if (isError) {
        return (
           <QueryErrorState
            title="Failed to load Activity"
            message={error.message}
            onRetry={refetch}
            loading={isRefetching}
        />
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