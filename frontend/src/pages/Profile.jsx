import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useProfile } from "../hooks/useProfile";
import { useLogout } from "../hooks/useLogout";

import ProfileHero from "../components/profile/ProfileHero";
import UserInfoCard from "../components/profile/UserInfoCard";
import QuickActions from "../components/profile/QuickActions";
import LogoutButton from "../components/profile/LogoutButton";
import LogoutModal from "../components/profile/LogoutModal";
import ProfileSkeleton from "../components/profile/ProfileSkeleton";
import QueryErrorState from "../components/common/QueryErrorState";
import {
    showSuccess,
    showError,
} from "../lib/toast";

function Profile() {

    const navigate = useNavigate();

    const [logoutOpen, setLogoutOpen] = useState(false);

    const {
        data: user,
        isLoading,
        isError,
        error,
    } = useProfile();

    const logoutMutation = useLogout();

    const handleLogout = async () => {

        if (logoutMutation.isPending) return;

        try {

            await logoutMutation.mutateAsync();

            showSuccess(
                "Logged out successfully."
            );

            setLogoutOpen(false);

            navigate("/login", {
                replace: true,
            });

        } catch (error) {

            console.error(error);

            showError(
                error?.response?.data?.message ||
                "Logout failed."
            );

        }

    };

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 6,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.18,
                ease: "easeOut",
            },
        },
    };

    if (isError) {

    return (

        <QueryErrorState
            title="Failed to load profile."
            message={error.message}
            onRetry={refetch}
            loading={isRefetching}
        />

    );

}

    return (

        <>

            {isLoading ? (

                <ProfileSkeleton />

            ) : (

                <div className="px-6 pt-8 pb-28">

                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-6"
                    >

                        <motion.div variants={item}>

                            <ProfileHero user={user} />

                        </motion.div>

                        <motion.div variants={item}>

                            <UserInfoCard user={user} />

                        </motion.div>

                        <motion.div variants={item}>

                            <QuickActions />

                        </motion.div>

                        <motion.div variants={item}>

                            <LogoutButton
                                onLogout={() =>
                                    setLogoutOpen(true)
                                }
                            />

                        </motion.div>

                    </motion.div>

                </div>

            )}

            <LogoutModal
                open={logoutOpen}
                loading={logoutMutation.isPending}
                onClose={() => setLogoutOpen(false)}
                onConfirm={handleLogout}
            />

        </>

    );

}

export default Profile;