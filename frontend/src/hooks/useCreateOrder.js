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

            const order =
                await createOrder(formData);

            await processOrder(
                order.order._id
            );

            return order;

        },

        onSuccess: async () => {

            await invalidateAppQueries(
                queryClient

            );

        },

    });

}