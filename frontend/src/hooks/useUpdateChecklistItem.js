import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { updateChecklistItem } from "../api/checklistMutations.js";
import { queryKeys } from "../lib/queryKeys.js";
import { invalidateAppQueries } from "../lib/invalidateAppQueries.js";

export function useUpdateChecklistItem(orderId) {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({
            itemId,
            payload,
        }) =>
            updateChecklistItem({
                itemId,
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