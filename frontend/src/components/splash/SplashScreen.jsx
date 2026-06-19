import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function SplashScreen() {

    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setMessageIndex((prev) =>
                prev < messages.length - 1
                    ? prev + 1
                    : prev
            )
        }, 1800);
        return () => clearInterval(interval);
    }, []);

    const messages = [
        "Initializing AI engine...",
        "Connecting securely...",
        "Loading your workspace...",
        "Almost ready..."
    ];


    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="
      fixed
      inset-0
      z-[9999]

      flex
      items-center
      justify-center

      overflow-hidden

      bg-gradient-to-br
      from-[#F7FAEF]
      via-white
      to-[#EEF6DB]
    "
        >

            {/* ===== Background Glow ===== */}
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                }}
                className="absolute -top-52 -left-52 h-[420px] w-[420px] rounded-full bg-[#D9F08D]/25 blur-[120px]"
            />

            <motion.div
                animate={{
                    x: [0, -30, 0],
                    y: [0, 20, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "easeInOut",
                }}
                className="absolute -bottom-52 -right-52 h-[420px] w-[420px] rounded-full bg-[#A9C957]/15 blur-[120px]"
            />

            {/* ===== Center Content ===== */}
            <div className="relative z-10 flex w-full max-w-sm select-none flex-col items-center px-8">

                {/* Logo */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.85,
                    }}
                    animate={{
                        opacity: 1,
                        scale: [1, 1.03, 1],
                        y: [0, -6, 0],
                        rotate: [0, 1, 0, -1, 0],
                    }}
                    transition={{
                        opacity: {
                            duration: 0.5,
                        },
                        scale: {
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut",
                        },
                        y: {
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut",
                        },
                        rotate: {
                            repeat: Infinity,
                            duration: 5,
                            ease: "easeInOut",
                        },
                    }}
                    className="relative"
                >
                    {/* Soft Glow */}
                    <div className="absolute inset-0 rounded-full bg-[#7F9E2F]/10 blur-3xl" />

                    <img
                        src="/logo.png"
                        alt="FlowZen"
                        className="relative h-28 w-28 object-contain drop-shadow-[0_20px_35px_rgba(127,158,47,0.18)]"
                    />
                </motion.div>

                {/* Brand */}
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 12,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                    }}
                    className="
        mt-7

        text-[2.7rem]
        font-black
        leading-none
        tracking-tight

        text-[#23330F]
      "
                >
                    Flow
                    <span className="text-[#7F9E2F]">
                        Zen
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.35,
                    }}
                    className="
        mt-3

        text-sm
        font-medium
        tracking-wide

        text-[#7B8794]
      "
                >
                    AI-Powered Order Workflow
                </motion.p>

                {/* Dynamic Status */}
                <motion.p
                    key={messageIndex}
                    initial={{
                        opacity: 0,
                        y: 8,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.35,
                    }}
                    className="
        mt-10

        text-sm
        font-semibold
        tracking-wide

        text-[#344054]
      "
                >
                    {messages[messageIndex]}
                </motion.p>

                {/* Premium Loader */}
                <div className="relative mt-8 h-[5px] w-56 overflow-hidden rounded-full bg-[#E7ECD8]">

                    <motion.div
                        animate={{
                            x: ["-120%", "220%"],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.3,
                            ease: "linear",
                        }}
                        className="
          absolute
          top-0
          left-0

          h-full
          w-24

          rounded-full

          bg-gradient-to-r
          from-transparent
          via-[#8CB43F]
          to-transparent
        "
                    />

                </div>

                {/* Footer */}
                <motion.p
                    animate={{
                        opacity: [0.45, 1, 0.45],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                    }}
                    className="
        mt-6

        max-w-[240px]

        text-center
        text-xs
        leading-6

        text-gray-400
      "
                >
                    Preparing your workspace...
                </motion.p>

            </div>

        </motion.div >
    );
}

export default SplashScreen;