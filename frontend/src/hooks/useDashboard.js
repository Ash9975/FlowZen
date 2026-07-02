import { useQuery } from "@tanstack/react-query";
import {queryKeys} from '../lib/queryKeys.js';

import {
    getDashboardStats,
    getRecentOrders,
} from "../api/dashboard.js";

export function useDashboardStats() {
    return useQuery({
        queryKey:queryKeys.dashboard.stats,

        queryFn: getDashboardStats,
    });
}

export function useRecentOrders() {
    return useQuery({
        queryKey: queryKeys.dashboard.recentOrders,

        queryFn: getRecentOrders,
    });
}