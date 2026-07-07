import api from "./axios";

export const deleteChecklistItem = async (itemId) => {

    const { data } = await api.delete(
        `/checklists/${itemId}`
    );

    return data;

};

export const createChecklistItem = async ({
    orderId,
    payload,
}) => {

    const { data } = await api.post(
        `/checklists/${orderId}`,
        payload
    );

    return data;

};

export const updateChecklistItem = async ({
    itemId,
    payload,
}) => {

    const { data } = await api.put(
        `/checklists/${itemId}`,
        payload
    );

    return data;

};