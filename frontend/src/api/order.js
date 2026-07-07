import api from "./axios";

export const getOrders = async ({
    search = "",
    status = "all",
    page = 1,
}) => {

    const { data } = await api.get("/orders", {
        params: {
            search,
            status,
            page,
        },
    });

    return data;
};