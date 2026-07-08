import { Activity } from "lucide-react";

function EmptyActivity() {

    return (

        <div className="mt-24 flex flex-col items-center text-center">

            <div
                className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center

                    rounded-full

                    bg-[#EEF6D8]
                "
            >

                <Activity
                    size={34}
                    className="text-primary"
                />

            </div>

            <h2
                className="
                    mt-6

                    text-2xl
                    font-bold

                    text-[#23330F]
                "
            >

                No Activity Yet

            </h2>

            <p
                className="
                    mt-3

                    max-w-xs

                    text-sm
                    leading-6

                    text-[#667085]
                "
            >

                Create your first order to start tracking
                packing progress and completed orders.

            </p>

        </div>

    );

}

export default EmptyActivity;