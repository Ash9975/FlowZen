import axios from "axios";

const api = axios.create({

    baseURL:
        import.meta.env.VITE_API_URL ??
        "http://localhost:5000/api",

    withCredentials: true,

    timeout: 15000,

});

api.interceptors.response.use(

    response => response,

    error => {

        if (!error.response) {

            error.message =
                "Unable to connect to the server.";

        }

        return Promise.reject(error);

    }

);

if (import.meta.env.DEV) {

    console.log(
        "API URL:",
        api.defaults.baseURL
    );

}

export default api;