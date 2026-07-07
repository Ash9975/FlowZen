import api from "./axios";

export const logout = async () => {

    const { data } = await api.post("/auth/logout");

    return data;
}