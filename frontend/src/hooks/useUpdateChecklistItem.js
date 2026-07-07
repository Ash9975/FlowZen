import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { updateChecklistItem } from "../api/checklistMutations.js";

import { queryKeys } from "../lib/queryKeys.js";

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

        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey:
                    queryKeys.orders.checklist(orderId),

            });

            queryClient.invalidateQueries({

                queryKey:
                    queryKeys.orders.detail(orderId),

            });

        },

    });

}