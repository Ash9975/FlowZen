import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { completeOrder } from "../api/orderMutations.js";
import { queryKeys } from "../lib/queryKeys.js";
import { invalidateAppQueries } from "../lib/invalidateAppQueries.js";
export function useCompleteOrder(orderId) {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: () =>
            completeOrder(orderId),

        onSuccess: (data) => {

            queryClient.setQueryData(
                queryKeys.orders.detail(orderId),
                data.order
            );

            queryClient.invalidateQueries({
                queryKey: queryKeys.orders.all,
            });

            queryClient.invalidateQueries({
                queryKey: queryKeys.dashboard.stats,
            });

            queryClient.invalidateQueries({
                queryKey: queryKeys.dashboard.recentOrders,
            });

            queryClient.invalidateQueries({
                queryKey: queryKeys.activity,
            });

        },

    });

}