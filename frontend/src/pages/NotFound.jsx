import { motion } from "framer-motion";
import { ArrowLeft, House, PackageSearch } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate();

    return (

        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-lime-50 via-white to-green-50 px-6">

            {/* Background Glow */}

            <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-lime-200/30 blur-3xl" />

            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-green-200/30 blur-3xl" />

            {/* Content */}

            <motion.div

                initial={{
                    opacity: 0,
                    y: 30,
                }}

                animate={{
                    opacity: 1,
                    y: 0,
                }}

                transition={{
                    duration: .5,
                }}

                className="relative z-10 w-full max-w-xl text-center"

            >

                {/* Floating Box */}

                <motion.div

                    animate={{
                        y: [-8, 8, -8],
                        rotate: [-2, 2, -2],
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                    }}

                    className="mx-auto flex h-40 w-40 items-center justify-center rounded-[40px] bg-white shadow-2xl"

                >

                    <PackageSearch
                        size={82}
                        className="text-[#7F9E2F]"
                    />

                </motion.div>

                {/* 404 */}

                <motion.h1

                    initial={{
                        scale: .8,
                    }}

                    animate={{
                        scale: 1,
                    }}

                    transition={{
                        delay: .2,
                    }}

                    className="
                        mt-10

                        bg-gradient-to-r
                        from-[#7F9E2F]
                        to-green-600

                        bg-clip-text

                        text-8xl
                        font-black

                        text-transparent
                    "

                >

                    404

                </motion.h1>

                {/* Title */}

                <h2 className="mt-4 text-3xl font-bold text-gray-900">

                    Order Lost in Transit

                </h2>

                {/* Description */}

                <p className="mx-auto mt-4 max-w-md leading-7 text-gray-500">

                    Looks like this page packed itself into
                    another warehouse.

                    <br />

                    Let's get you back to FlowZen.

                </p>

                {/* Buttons */}

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

                    <button

                        onClick={() =>
                            navigate("/dashboard")
                        }

                        className="
                            flex
                            items-center
                            justify-center
                            gap-2

                            rounded-2xl

                            bg-[#7F9E2F]

                            px-7
                            py-4

                            font-semibold
                            text-white

                            shadow-lg

                            transition

                            hover:scale-105
                        "

                    >

                        <House size={20} />

                        Dashboard

                    </button>

                    <button

                        onClick={() =>
                            navigate(-1)
                        }

                        className="
                            flex
                            items-center
                            justify-center
                            gap-2

                            rounded-2xl

                            border
                            border-gray-300

                            bg-white

                            px-7
                            py-4

                            font-semibold
                            text-gray-700

                            transition

                            hover:border-[#7F9E2F]
                            hover:text-[#7F9E2F]
                        "

                    >

                        <ArrowLeft size={20} />

                        Go Back

                    </button>

                </div>

                {/* Footer */}

                <p className="mt-12 text-sm text-gray-400">

                    FlowZen • AI Powered Order Packing

                </p>

            </motion.div>

        </div>

    );

}

export default NotFound;