import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";
import { useProfile } from "../hooks/useProfile";

import ProfileHero from "../components/profile/ProfileHero";
import UserInfoCard from "../components/profile/UserInfoCard";
import QuickActions from "../components/profile/QuickActions";
import LogoutButton from "../components/profile/LogoutButton";
import LogoutModal from "../components/profile/LogoutModal";
import ProfileSkeleton from "../components/profile/ProfileSkeleton";

function Profile() {

    const [logoutOpen, setLogoutOpen] = useState(false);
    const [logoutLoading, setLogoutLoading] = useState(false);

    const {
        data: user,
        isLoading,
        isError,
        error,
    } = useProfile();

    const navigate = useNavigate();

    const handleLogout = async () => {

        try {

            setLogoutLoading(true);

            await api.post("/auth/logout");

            setLogoutOpen(false);

            navigate("/login", {
                replace: true,
            });

        } catch (error) {

            console.error(error);

            alert(
                error?.response?.data?.message ||
                "Logout failed."
            );

        } finally {

            setLogoutLoading(false);

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

            <div className="flex h-[70vh] items-center justify-center">

                <div className="text-center">

                    <h2 className="text-lg font-semibold">
                        Failed to load profile
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        {error.message}
                    </p>

                </div>

            </div>

        );

    }

    return (

        <>

            {

                isLoading ? (

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

                )

            }

            <LogoutModal
                open={logoutOpen}
                loading={logoutLoading}
                onClose={() => setLogoutOpen(false)}
                onConfirm={handleLogout}
            />

        </>

    );

}

export default Profile;