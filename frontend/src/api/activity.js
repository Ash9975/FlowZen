import api from "./axios";

export async function getActivities() {

    const { data } = await api.get(
        "/activity"
    );

    return data.activities;

}