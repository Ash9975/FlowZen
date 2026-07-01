import { LogOut } from "lucide-react";
import { motion } from "framer-motion";

function LogoutButton({ onLogout }) {
    return (
        <motion.button
            whileHover={{
                scale: 1.02,
            }}
            whileTap={{
                scale: 0.98,
            }}
            onClick={onLogout}
            className="
        flex
        w-full
        items-center
        justify-center
        gap-3

        rounded-2xl

        bg-red-50

        px-5
        py-4

        font-semibold

        text-red-600

        transition

        hover:bg-red-100
      "
        >
            <LogOut size={20} />

            Logout
        </motion.button>
    );
}

export default LogoutButton;