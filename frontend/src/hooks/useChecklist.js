import { useQuery } from "@tanstack/react-query";

import { getChecklist } from "../api/editChecklist.js";
import { queryKeys } from "../lib/queryKeys.js";

export function useChecklist(orderId) {

    return useQuery({

        queryKey: [
            ...queryKeys.orders.detail(orderId),
            "checklist",
        ],

        queryFn: () => getChecklist(orderId),

        enabled: !!orderId,

    });

}