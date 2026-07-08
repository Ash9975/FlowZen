import { useQuery } from "@tanstack/react-query";

import api from "../api/axios";

export function useWeeklyPerformance() {

    return useQuery({

        queryKey: ["weekly-performance"],

        queryFn: async () => {

            const { data } = await api.get(
                "/dashboard/weekly-performance"
            );

            return data.performance;

        },

    });

}