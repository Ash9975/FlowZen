import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { createChecklistItem } from "../api/checklistMutations.js";

import { queryKeys } from "../lib/queryKeys.js";

export function useCreateChecklistItem(orderId) {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: payload =>
            createChecklistItem({
                orderId,
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