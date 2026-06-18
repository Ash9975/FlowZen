import { X, Check, Clock3, Store } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CompletionCard({
    customerName,
    completedItems,
    totalItems,
    packedTime,
}) {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 80,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: 80,
            }}
            transition={{
                duration: .45,
            }}
            className="
      fixed
      inset-0
      z-[100]
      flex
      items-center
      justify-center

      bg-black/40
      backdrop-blur-sm
      px-5
    "
        >
            <div
                className="
        relative

        w-full
        max-w-md

        rounded-[40px]
        bg-[#F9FBF3]

        p-7

        shadow-2xl
      "
            >

                <button
                    onClick={() =>
                        navigate("/dashboard")
                    }
                    className="
          absolute
          left-5
          top-5

          rounded-full

          p-2

          hover:bg-black/5
        "
                >
                    <X size={24} />
                </button>

                <div className="mt-8 flex justify-center">

                    <motion.div
                        initial={{
                            scale: 0,
                        }}
                        animate={{
                            scale: 1,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 220,
                            damping: 15,
                        }}
                        className="
            flex

            h-28
            w-28

            items-center
            justify-center

            rounded-full

            bg-primary
          "
                    >

                        <Check
                            size={54}
                            className="text-white"
                        />

                    </motion.div>

                </div>

                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: .2,
                    }}
                    className="
          mt-8

          text-center

          text-4xl
          font-bold

          text-gray-900
        "
                >
                    Order Packed!
                </motion.h1>

                <p
                    className="
          mt-3

          text-center

          text-gray-500
        "
                >
                    Everything is packed and
                    ready for delivery.
                </p>

                <div className="mt-8 space-y-4">

                    <div
                        className="
            flex
            items-center
            gap-4

            rounded-2xl

            bg-white

            p-4
          "
                    >
                        <div
                            className="
              flex

              h-14
              w-14

              items-center
              justify-center

              rounded-full

              bg-primary/10
            "
                        >
                            <Store
                                className="text-primary"
                            />
                        </div>

                        <div>

                            <h3 className="font-bold text-lg">
                                {customerName}
                            </h3>

                            <p className="text-gray-500">
                                {completedItems}/{totalItems} Items Packed
                            </p>

                        </div>

                    </div>

                    <div
                        className="
            flex
            items-center
            gap-4

            rounded-2xl

            bg-white

            p-4
          "
                    >

                        <div
                            className="
              flex

              h-14
              w-14

              items-center
              justify-center

              rounded-full

              bg-primary/10
            "
                        >
                            <Clock3
                                className="text-primary"
                            />
                        </div>

                        <div>

                            <p className="text-gray-500">
                                Packed in
                            </p>

                            <h3 className="font-bold text-xl">
                                {packedTime}
                            </h3>

                        </div>

                    </div>

                </div>

                <button
                    onClick={() =>
                        navigate("/create")
                    }
                    className="
          mt-8

          h-16
          w-full

          rounded-2xl

          bg-primary

          text-lg
          font-semibold

          text-white

          shadow-lg

          transition

          active:scale-95
        "
                >
                    Start Next Order →
                </button>

            </div>

        </motion.div>
    );
}

export default CompletionCard;