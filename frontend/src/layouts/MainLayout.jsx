import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import BottomNav from "../components/dashboard/BottomNav";

function MainLayout() {

    const location = useLocation();

    return (
        <div className="min-h-screen bg-[#F8FAF4]">
            <div className="mx-auto max-w-md min-h-screen bg-white shadow-sm overflow-hidden">

                <AnimatePresence mode="sync">

                    <motion.main
                        key={location.pathname}
                        initial={{
                            opacity: 0,
                            x: 12,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        exit={{
                            opacity: 0,
                            x: -12,
                        }}
                        transition={{
                            duration: 0.18,
                            ease: "easeOut",
                        }}
                        className="pb-24"
                    >
                        <Outlet />
                    </motion.main>

                </AnimatePresence>

                <BottomNav />

            </div>
        </div>
    );
}

export default MainLayout;