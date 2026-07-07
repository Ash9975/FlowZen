import { useMutation } from "@tanstack/react-query";

import { login } from "../api/auth.js";

export function useLogin() {

    return useMutation({

        mutationFn: login,

    });

}