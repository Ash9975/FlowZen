import { CalendarDays } from "lucide-react";

function DashboardGreeting({ userName = "User" }) {

    const hour = new Date().getHours();

    let greeting = "Good Evening";

    if (hour < 12) {

        greeting = "Good Morning";

    } else if (hour < 18) {

        greeting = "Good Afternoon";

    }

    const today = new Date().toLocaleDateString(
        "en-IN",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
        }
    );

    return (

        <div className="space-y-2">

            <h1 className="text-3xl font-bold text-[#1F2937]">

                {greeting},{" "}
                <span className="text-[#7F9E2F]">
                    {userName}
                </span>
                

            </h1>

            <div className="flex items-center gap-2 text-sm text-gray-500">

                <CalendarDays size={16} />

                <span>{today}</span>

            </div>

        </div>

    );

}

export default DashboardGreeting;