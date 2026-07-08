import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { deleteChecklistItem } from "../api/checklistMutations.js";
import { queryKeys } from "../lib/queryKeys.js";
import { invalidateAppQueries } from "../lib/invalidateAppQueries.js";

export function useDeleteChecklistItem(orderId) {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: deleteChecklistItem,

        onSuccess: async () => {

            await invalidateAppQueries(
                queryClient,
                orderId
            );

        },

    });

}