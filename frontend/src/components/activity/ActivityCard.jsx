import {
    CheckCircle2,
    ClipboardPlus,
    Package,
} from "lucide-react";

import { formatActivityTime } from "../../lib/formatActivityTime";

const activityConfig = {

    "order-created": {

        title: "New packing order created",

        icon: ClipboardPlus,

        iconBg: "bg-blue-100",

        iconColor: "text-blue-600",

    },

    "packing-started": {

        title: "Packing started",

        icon: Package,

        iconBg: "bg-orange-100",

        iconColor: "text-orange-600",

    },

    "order-completed": {

        title: "Packing completed",

        icon: CheckCircle2,

        iconBg: "bg-green-100",

        iconColor: "text-green-600",

    },

};

function ActivityCard({ activity }) {

    const config =
        activityConfig[activity.type];

    const Icon = config.icon;

    return (

        <div
            className="
                flex
                gap-4

                rounded-3xl

                border
                border-gray-100

                bg-white

                p-5

                shadow-sm
            "
        >

            <div
                className={`
                    ${config.iconBg}

                    flex
                    h-12
                    w-12

                    items-center
                    justify-center

                    rounded-2xl
                `}
            >

                <Icon
                    size={22}
                    className={config.iconColor}
                />

            </div>

            <div className="flex-1">

                <h3 className="font-bold text-gray-900">

                    {activity.customerName}

                </h3>

                <p className="mt-1 text-sm text-gray-600">

                    {config.title}

                </p>

                <p className="mt-2 text-xs text-gray-400">

                    {formatActivityTime(
                        activity.createdAt
                    )}

                </p>

            </div>

        </div>

    );

}

export default ActivityCard;