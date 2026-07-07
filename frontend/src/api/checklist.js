import api from "./axios";

export const toggleChecklist = async (itemId) => {

    const { data } = await api.patch(`/checklists/${itemId}/toggle`);
    return data;
}