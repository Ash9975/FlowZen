import { Activity } from "lucide-react";

function EmptyActivity() {
    return (
        <div className="mt-24 text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF6D8]">

                <Activity
                    size={36}
                    className="text-[#7F9E2F]"
                />

            </div>

            <h2 className="mt-6 text-2xl font-bold">

                No Activity Yet

            </h2>

            <p className="mt-3 text-[#667085]">

                Your recent actions and order updates will appear here.

            </p>

        </div>
    );
}

export default EmptyActivity;