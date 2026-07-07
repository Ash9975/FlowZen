import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    createOrder,
    processOrder,
} from "../api/createOrder.js";

import { queryKeys } from "../lib/queryKeys.js";

export function useCreateOrder() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: async (formData) => {

            const order =
                await createOrder(formData);

            await processOrder(
                order.order._id
            );

            return order;

        },

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey:
                    queryKeys.orders.all,

            });

            queryClient.invalidateQueries({

                queryKey:
                    queryKeys.dashboard.stats,

            });

            queryClient.invalidateQueries({

                queryKey:
                    queryKeys.dashboard.recentOrders,

            });

            queryClient.invalidateQueries({

                queryKey:
                    queryKeys.activity,

            });

        },

    });

}