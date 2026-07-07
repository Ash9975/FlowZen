import { useQuery } from "@tanstack/react-query";

import { getActivities } from "../api/activity.js";
import { queryKeys } from "../lib/queryKeys.js";

export function useActivity() {

    return useQuery({

        queryKey: queryKeys.activity,

        queryFn: getActivities,

        staleTime: 1000 * 60 * 5,

    });

}