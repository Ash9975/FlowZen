import api from "./axios";

export const createOrder = async (formData) => {

    const { data } = await api.post(

        "/orders",

        formData,

        {

            headers: {

                "Content-Type":
                    "multipart/form-data",

            },

        }

    );

    return data;

};

export const processOrder = async (orderId) => {

    const { data } = await api.post(

        `/orders/${orderId}/process`

    );

    return data;

};