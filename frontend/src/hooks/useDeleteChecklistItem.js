import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { deleteChecklistItem } from "../api/checklistMutations.js";

import { queryKeys } from "../lib/queryKeys.js";

export function useDeleteChecklistItem(orderId) {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: deleteChecklistItem,

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