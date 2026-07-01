import {
    Phone,
    BadgeCheck,
    CalendarDays,
} from "lucide-react";

function UserInfoCard({ user }) {

    const joined = user.createdAt
        ? new Date(user.createdAt).toLocaleDateString(
            "en-IN",
            {
                month: "long",
                year: "numeric",
            }
        )
        : "Recently";

    const items = [
        {
            icon: Phone,
            title: "Mobile Number",
            value: user.mobile,
        },
        {
            icon: BadgeCheck,
            title: "Role",
            value: user.role || "User",
        },
        {
            icon: CalendarDays,
            title: "Member Since",
            value: joined,
        },
    ];

    return (
        <div
            className="
        rounded-3xl
        border
        border-[#EEF2E5]
        bg-white
        p-6
        shadow-sm
      "
        >
            <h2 className="mb-6 text-lg font-bold text-[#1F2937]">
                Account Information
            </h2>

            <div className="space-y-5">

                {items.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className="
                flex
                items-center
                gap-4
              "
                        >
                            <div
                                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#F6F9EE]
                "
                            >
                                <Icon
                                    size={20}
                                    className="text-[#7F9E2F]"
                                />
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    {item.title}
                                </p>

                                <h3 className="font-semibold text-[#1F2937]">
                                    {item.value}
                                </h3>
                            </div>

                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default UserInfoCard;