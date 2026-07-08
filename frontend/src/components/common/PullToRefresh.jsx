// import PullToRefresh from "react-simple-pull-to-refresh";
// import { useQueryClient } from "@tanstack/react-query";

// function AppPullToRefresh({ children }) {

//     const queryClient = useQueryClient();

//     const handleRefresh = async () => {

//         await Promise.all([

//             queryClient.invalidateQueries({
//                 queryKey: queryKeys.orders.all,
//             }),

//             queryClient.invalidateQueries({
//                 queryKey: queryKeys.dashboard.stats,
//             }),

//             queryClient.invalidateQueries({
//                 queryKey: queryKeys.dashboard.recentOrders,
//             }),

//             queryClient.invalidateQueries({
//                 queryKey: queryKeys.activity,
//             }),

//         ]);

//     };

//     return (

//         <PullToRefresh
//             onRefresh={handleRefresh}
//             pullingContent=""
//             refreshingContent="Refreshing..."
//         >
//             {children}
//         </PullToRefresh>

//     );

// }

// export default AppPullToRefresh;