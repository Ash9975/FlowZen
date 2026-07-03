import api from "./axios";

export const getActivities = async () => {

    const { data } = await api.get("/activity");

    return data.activities;

};