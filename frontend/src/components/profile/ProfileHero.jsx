import { motion } from "framer-motion";

function ProfileHero({ user }) {
  const initials = user?.name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        rounded-3xl
        border
        border-[#EEF2E5]
        bg-white
        p-8
        shadow-sm
      "
    >
      <div className="flex flex-col items-center">

        <div
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-[#A9C957]
            to-[#7F9E2F]
            text-3xl
            font-black
            text-white
            shadow-lg
          "
        >
          {initials}
        </div>

        <h1 className="mt-5 text-2xl font-bold text-[#1F2937]">
          {user.name}
        </h1>

        <span className="mt-2 rounded-full bg-[#F3F8E7] px-4 py-1 text-sm font-semibold text-[#7F9E2F]">
          Warehouse User
        </span>

        <p className="mt-3 text-center text-sm text-gray-500">
          AI Powered Order Workflow Platform
        </p>

      </div>
    </motion.div>
  );
}

export default ProfileHero;