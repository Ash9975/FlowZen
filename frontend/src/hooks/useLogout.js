import { useMutation, useQueryClient} from "@tanstack/react-query";
import { logout } from "../api/authMutation.js";

export function useLogout() {

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: logout,
        onSuccess: () => {
            queryClient.clear();
            window.location.href = "/login";
        }
    })

}
