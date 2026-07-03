import api from "./axios";

export const getOrders = async ({
    search = "",
    status = "all",
    page = 1,
}) => {

    console.log("➡️ Sending params:", {
        search,
        status,
        page,
    });

    const { data } = await api.get("/orders", {
        params: {
            search,
            status,
            page,
        },
    });

    console.log("⬅️ Response:", data);

    return data;
};