import { motion, AnimatePresence } from "framer-motion";
import { LogOut } from "lucide-react";

function LogoutModal({
    open,
    onClose,
    onConfirm,
    loading,
}) {

    return (
        <AnimatePresence>

            {open && (

                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    className="
            fixed
            inset-0
            z-50

            flex
            items-center
            justify-center

            bg-black/40
            backdrop-blur-sm
          "
                >

                    <motion.div
                        initial={{
                            scale: .9,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        exit={{
                            scale: .9,
                            opacity: 0,
                        }}
                        className="
              w-[90%]
              max-w-md

              rounded-3xl

              bg-white

              p-7

              shadow-2xl
            "
                    >

                        <div
                            className="
                mx-auto

                flex
                h-16
                w-16

                items-center
                justify-center

                rounded-full

                bg-red-50
              "
                        >

                            <LogOut
                                size={28}
                                className="text-red-500"
                            />

                        </div>

                        <h2 className="mt-6 text-center text-2xl font-bold">

                            Logout?

                        </h2>

                        <p className="mt-3 text-center text-gray-500">

                            You'll need to sign in again to access your
                            workspace.

                        </p>

                        <div className="mt-8 flex gap-4">

                            <button
                                onClick={onClose}
                                className="
                  flex-1

                  rounded-2xl

                  border

                  py-3

                  font-semibold
                "
                            >
                                Cancel
                            </button>

                            <button
                                onClick={onConfirm}
                                disabled={loading}
                                className="
                  flex-1

                  rounded-2xl

                  bg-red-500

                  py-3

                  font-semibold

                  text-white

                  hover:bg-red-600
                "
                            >
                                {loading
                                    ? "Logging out..."
                                    : "Logout"}
                            </button>

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>
    );
}

export default LogoutModal;