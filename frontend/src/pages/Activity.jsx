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

        refetch,

        isRefetching,

    } = useActivity();

    if (isError) {

        return (

            <QueryErrorState

                title="Failed to load activity"

                message={
                    error?.message ??
                    "Unable to load your recent activity."
                }

                loading={isRefetching}

                onRetry={refetch}

            />

        );

    }

    return (

        <main className="min-h-screen bg-gray-50 pb-28">

            <div className="mx-auto max-w-[430px] px-5 pt-7">

                <ActivityHeader />

                <div className="mt-6">

                    {isLoading ? (

                        <ActivitySkeleton />

                    ) : activities.length === 0 ? (

                        <EmptyActivity />

                    ) : (

                        <ActivityList
                            activities={activities}
                        />

                    )}

                </div>

            </div>

        </main>

    );

}

export default Activity;