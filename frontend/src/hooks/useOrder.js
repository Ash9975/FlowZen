import { useQuery } from "@tanstack/react-query";

import { getOrder } from "../api/orderDetails.js";

import { queryKeys } from "../lib/queryKeys.js";

export function useOrder(id) {
    return useQuery({
        queryKey: queryKeys.orders.detail(id),
        queryFn: () => getOrder(id),
        enabled: !!id,
    })
}