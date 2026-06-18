import { motion } from "framer-motion";

function AuthLayout({ children }) {
    return (
        <div
            className="
      min-h-screen
      bg-gradient-to-br
      from-[#F8FBEF]
      via-[#F4F8EA]
      to-[#EDF4DD]

      flex
      items-center
      justify-center

      px-5
      py-8
    "
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 35,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: .45,
                }}
                className="w-full max-w-md "
            >
                {children}
            </motion.div>
        </div>
    );
}

export default AuthLayout;