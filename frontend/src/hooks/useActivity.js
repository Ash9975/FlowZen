import { useQuery } from "@tanstack/react-query";

import { getActivities } from "../api/activity";
import { queryKeys } from "../lib/queryKeys";

export function useActivity() {

    return useQuery({

        queryKey: queryKeys.activity,

        queryFn: getActivities,

        staleTime: 1000 * 60 * 5,

    });

}