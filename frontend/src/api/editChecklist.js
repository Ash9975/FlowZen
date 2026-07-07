import api from "./axios";

export const getChecklist = async (orderId) => {

    const { data } = await api.get(
        `/checklists/${orderId}`
    );

    return data.items;

};