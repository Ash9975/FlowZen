import { Bell, Menu, Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

function DashboardHeader() {
    const { user } = useAuth();

    return (
        <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
        >
            {/* TOP BAR */}
            <div className="flex items-center justify-between">
                <button className="p-1">
                    <Menu size={28} />
                </button>

                <button className="relative p-1">
                    <Bell size={26} />

                    <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-primary" />
                </button>
            </div>

            {/* GREETING */}
            <div className="mt-5">
                <h1 className="text-4xl font-extrabold leading-none text-foreground">
                    Hello, {user?.name?.split(" ")[0]} ! 
                </h1>

                <p className="mt-1 font-semibold text-lg text-muted-foreground">
                    Have a nice day at work
                </p>
            </div>

            {/* FILTERS */}
            <div className="mt-8 flex gap-3">
                <button
                    className="flex h-14 items-center gap-2 rounded-2xl border bg-white  px-5  text-base font-bold shadow-sm "
                >
                    All Orders
                    <ChevronDown size={16} />
                </button>

                <div
                    className=" flex h-14 flex-1 items-center gap-3 rounded-2xl border  bg-white px-5 shadow-sm "
                >
                    <Search
                        size={18}
                        className="text-muted-foreground"
                    />

                    <input
                        type="text"
                        placeholder="Search"
                        className=" w-full bg-transparent outline-none text-base "
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default DashboardHeader;