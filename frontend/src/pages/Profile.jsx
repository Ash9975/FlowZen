import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import api from "../api/axios";
import { useNavigate } from "react-router-dom";

import ProfileHero from "../components/profile/ProfileHero";
import UserInfoCard from "../components/profile/UserInfoCard";
import QuickActions from "../components/profile/QuickActions";
import LogoutButton from "../components/profile/LogoutButton";
import LogoutModal from "../components/profile/LogoutModal";
import ProfileSkeleton from "../components/profile/ProfileSkeleton";
import BottomNav from "../components/dashboard/BottomNav";

function Profile() {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [logoutOpen, setLogoutOpen] = useState(false);

    const [logoutLoading, setLogoutLoading] =
        useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data } = await api.get("/auth/me");

                setUser(data.user);

            } catch (error) {
                console.error(error);

            } finally {
                setLoading(false);
            }
        };

        fetchProfile();

    }, []);




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
                staggerChildren: 0.12,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .35,
            },
        },
    };

    return (

        <motion.div>

            {

                loading

                    ?

                    <ProfileSkeleton />

                    :

                    <>
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 20,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: .35,
                            }}
                            className="min-h-screen"
                        >
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: .1,
                                }}
                                className="
                        mx-auto
                        max-w-md
                        min-h-screen

                        bg-white

                        px-6
                        pt-8
                        pb-28

                        shadow-sm
                    "
                            >

                                <motion.div
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                    className="space-y-6"
                                >

                                    <motion.div variants={item}>

                                        <ProfileHero
                                            user={user}
                                        />

                                    </motion.div>

                                    <motion.div variants={item}>

                                        <UserInfoCard
                                            user={user}
                                        />

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

                                <BottomNav />

                            </motion.div>
                        </motion.div>

                        <LogoutModal
                            open={logoutOpen}
                            loading={logoutLoading}
                            onClose={() =>
                                setLogoutOpen(false)
                            }
                            onConfirm={handleLogout}
                        />
                    </>

            }

            <BottomNav />

        </motion.div>

    )


}

export default Profile;