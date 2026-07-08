import { queryKeys } from "./queryKeys.js";

export async function invalidateAppQueries(
    queryClient,
    orderId = null
) {

    const queries = [

        queryClient.invalidateQueries({
            queryKey: queryKeys.orders.all,
        }),

        queryClient.invalidateQueries({
            queryKey: queryKeys.dashboard.stats,
        }),

        queryClient.invalidateQueries({
            queryKey: queryKeys.dashboard.recentOrders,
        }),

        queryClient.invalidateQueries({
            queryKey: queryKeys.activity,
        }),

    ];

    if (orderId) {

        queries.push(

            queryClient.invalidateQueries({
                queryKey: queryKeys.orders.detail(orderId),
            }),

            queryClient.invalidateQueries({
                queryKey: queryKeys.orders.checklist(orderId),
            })

        );

    }

    await Promise.all(queries);

}