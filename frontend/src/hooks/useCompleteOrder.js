import { useMutation, useQueryClient } from "@tanstack/react-query";

import { completeOrder } from "../api/orderMutations.js";
import { queryKeys } from "../lib/queryKeys.js";

export function useCompleteOrder(orderId) {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: () => completeOrder(orderId),

        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: queryKeys.orders.detail(orderId),
            });

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