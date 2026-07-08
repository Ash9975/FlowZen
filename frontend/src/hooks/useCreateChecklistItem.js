import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { createChecklistItem } from "../api/checklistMutations.js";
import { queryKeys } from "../lib/queryKeys.js";
import { invalidateAppQueries } from "../lib/invalidateAppQueries.js";
export function useCreateChecklistItem(orderId) {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: payload =>
            createChecklistItem({
                orderId,
                payload,
            }),

        onSuccess: async () => {

            await invalidateAppQueries(
                queryClient,
                orderId
            );

        },

    });

}