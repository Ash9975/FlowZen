import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../api/order.js";
import { queryKeys } from "../lib/queryKeys.js";

export function useOrders(search, status, page = 1) {

    return useQuery({

        queryKey:
            queryKeys.orders.list(
                search,
                status,
                page
            ),

        queryFn: () =>
            getOrders({
                search,
                status,
                page,
            }),

        placeholderData: previousData => previousData,

    });

}