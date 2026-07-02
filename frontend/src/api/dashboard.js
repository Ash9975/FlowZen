import api from "./axios";

export const getDashboardStats = async () => {
    const { data } = await api.get("/dashboard/stats");
    return data.stats;
};

export const getRecentOrders = async () => {
    const { data } = await api.get("/dashboard/recent-orders");
    return data.orders;
};