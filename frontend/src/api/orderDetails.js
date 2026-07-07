import api from "./axios";

export const getOrder = async (id) => {

    const { data } = await api.get(`/orders/${id}`);

    return data.order;

};