import api from "./axios";

export const completeOrder = async (orderId) => {

    const { data } = await api.patch(
        `/orders/${orderId}/complete`
    );

    return data;

};