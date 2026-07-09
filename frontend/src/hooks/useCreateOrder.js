import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    createOrder,
    processOrder,
} from "../api/createOrder.js";

import { queryKeys } from "../lib/queryKeys.js";
import { invalidateAppQueries } from "../lib/invalidateAppQueries.js";

export function useCreateOrder() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: async (formData) => {

            const order = await createOrder(formData);

            try {

                await processOrder(order.order._id);

            } catch (error) {

                console.error("AI Processing Failed:", error);

            }

            return order;

        },

        onSuccess: async () => {

            await invalidateAppQueries(
                queryClient
            );

        },

    });

}