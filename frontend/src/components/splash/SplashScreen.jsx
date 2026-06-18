import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function SplashScreen() {

    const [messageIndex, setMessageIndex] =
        useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setMessageIndex((prev) =>
                prev < messages.length - 1
                    ? prev + 1
                    : prev
            );

        }, 1800);

        return () => clearInterval(interval);

    }, []);

    const messages = [
        "Initializing FlowZen...",
        "Connecting to server...",
        "Loading workspace...",
        "Almost Ready..."
    ];
    return (
        <motion.div
            initial={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
            transition={{
                duration: .4,
            }}
            className="
      fixed
      inset-0
      z-[9999]

      flex
      flex-col
      items-center
      justify-center

      bg-gradient-to-br
      from-[#F7FAEF]
      via-white
      to-[#EEF6DB]
      "
        >
            <div
                className="
        absolute
        -top-40
        -left-40

        h-80
        w-80

        rounded-full

        bg-[#CDE87D]/20

        blur-3xl
    "
            />

            <div
                className="
        absolute
        -bottom-40
        -right-40

        h-80
        w-80

        rounded-full

        bg-[#A9C957]/20

        blur-3xl
    "
            />
            {/* Logo */}

            <motion.img
                initial={{
                    scale: .7,
                    opacity: 0,
                }}
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: 1,
                }}
                transition={{
                    scale: {
                        repeat: Infinity,
                        duration: 2.2,
                    },
                    opacity: {
                        duration: .5,
                    },
                }}
                transition={{
                    duration: .5,
                }}
                src="./src/assets/logo.png"
                alt="FlowZen"
                className="w-28 h-28 rounded-3xl shadow-xl"
            />

            <motion.h1
                initial={{
                    opacity: 0,
                    y: 15,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: .2,
                }}
                className="
        mt-6

        text-4xl
        font-extrabold

        text-[#344054]
        "
            >
                Flow
                <span className="text-[#7F9E2F]">
                    Zen
                </span>
            </motion.h1>

            <motion.p
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: .35,
                }}
                className="
        mt-3

        text-gray-500
      "
            >
                {messages[messageIndex]}
            </motion.p>

            {/* Loader */}

            <div className="relative overflow-hidden mt-10 w-44 h-2 rounded-full bg-[#E7ECD8] overflow-hidden">

                <motion.div
                    initial={{
                        width: 0,
                    }}
                    animate={{
                        x: ["-100%", "100%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.3,
                        ease: "linear",
                    }}
                    transition={{
                        duration: 3,
                    }}
                    className="
absolute
left-0
top-0

h-full
w-1/2

rounded-full

bg-gradient-to-r
from-[#7F9E2F]
to-[#A9C957]
"
                />

            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                }}
                className="
        mt-2
        text-xs
        text-gray-400
    "
            >
                Please wait while we prepare your workspace
            </motion.p>

        </motion.div>
    );
}

export default SplashScreen;