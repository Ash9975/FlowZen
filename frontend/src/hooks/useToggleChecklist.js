import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { toggleChecklist } from "../api/checklist.js";
import { queryKeys } from "../lib/queryKeys.js";

export function useToggleChecklist(orderId) {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: toggleChecklist,

        onMutate: async (itemId) => {

            await queryClient.cancelQueries({
                queryKey: queryKeys.orders.detail(orderId),
            });

            const previousOrder = queryClient.getQueryData(
                queryKeys.orders.detail(orderId)
            );

            if (!previousOrder) {

                return {
                    previousOrder,
                };

            }

            queryClient.setQueryData(

                queryKeys.orders.detail(orderId),

                oldOrder => {

                    if (!oldOrder) return oldOrder;

                    const checklist =
                        oldOrder.checklist.map(item => {

                            if (item._id !== itemId) {

                                return item;

                            }

                            return {

                                ...item,
                                completed: !item.completed,

                            };

                        });

                    const completedItems =
                        checklist.filter(
                            item => item.completed
                        ).length;

                    const totalItems =
                        checklist.length;

                    const progress =
                        totalItems === 0
                            ? 0
                            : Math.round(
                                (completedItems / totalItems) * 100
                            );

                    return {

                        ...oldOrder,

                        checklist,

                        completedItems,

                        totalItems,

                        progress,

                        status:
                            progress === 0
                                ? "pending"
                                : "in-progress",

                    };

                }

            );

            return {

                previousOrder,

            };

        },

        onError: (err, itemId, context) => {

            if (context?.previousOrder) {

                queryClient.setQueryData(
                    queryKeys.orders.detail(orderId),
                    context.previousOrder
                );

            }

        },

        onSuccess: () => {

            queryClient.invalidateQueries({
                queryKey: queryKeys.dashboard.stats,
            });

            queryClient.invalidateQueries({
                queryKey: queryKeys.dashboard.recentOrders,
            });

            queryClient.invalidateQueries({
                queryKey: queryKeys.orders.all,
            });

            queryClient.invalidateQueries({
                queryKey: queryKeys.activity,
            });

        },

    });

}