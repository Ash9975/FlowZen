import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { deleteOrder } from "../api/orderDelete";

import { invalidateAppQueries } from "../lib/invalidateAppQueries";

export function useDeleteOrder() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: deleteOrder,

        onSuccess: async () => {

            await invalidateAppQueries(
                queryClient
            );

        },

    });

}