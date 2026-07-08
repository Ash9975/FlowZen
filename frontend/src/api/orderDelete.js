import api from "./axios";

export const deleteOrder = async (orderId) => {

    const { data } = await api.delete(

        `/orders/${orderId}`

    );

    return data;

};