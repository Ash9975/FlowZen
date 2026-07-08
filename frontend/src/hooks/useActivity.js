import { useQuery } from "@tanstack/react-query";

import { getActivities } from "../api/activity";

export function useActivity() {

    return useQuery({

        queryKey: ["activity"],

        queryFn: getActivities,

    });

}