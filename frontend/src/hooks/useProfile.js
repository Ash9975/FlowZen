import { useQuery } from "@tanstack/react-query";

import { getProfile } from "../api/profile.js";
import { queryKeys } from "../lib/queryKeys.js";

export function useProfile() {
    return useQuery({
        queryKey: queryKeys.profile,
        queryFn: getProfile,
    });
}