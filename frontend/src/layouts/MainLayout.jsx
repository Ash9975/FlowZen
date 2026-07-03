import { Outlet } from "react-router-dom";

import BottomNav from "../components/dashboard/BottomNav";

function MainLayout() {

    return (

        <div className="min-h-screen bg-[#F8FAF4]">

            <div
                className="
                    mx-auto
                    max-w-md
                    min-h-screen
                    bg-white
                    shadow-sm
                "
            >

                <main className="pb-24">

                    <Outlet />

                </main>

                <BottomNav />

            </div>

        </div>

    );

}

export default MainLayout;