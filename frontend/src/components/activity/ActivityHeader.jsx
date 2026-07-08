import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ActivityHeader() {

    const navigate = useNavigate();

    return (

        <header className="mb-8">

            <button

                onClick={() => navigate(-1)}

                className="
                    flex
                    h-11
                    w-11

                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-[#E8EDD9]

                    bg-white

                    shadow-sm

                    transition

                    hover:bg-[#F7FAEF]
                    active:scale-95
                "

            >

                <ArrowLeft
                    size={20}
                    className="text-[#23330F]"
                />

            </button>

            <div className="mt-6">

                <h1 className="text-4xl font-black text-[#23330F]">

                    Activity

                </h1>

                <p className="mt-2 max-w-sm text-sm leading-6 text-[#667085]">

                    Stay updated with important events like new orders,
                    packing started, and completed orders.

                </p>

            </div>

        </header>

    );

}

export default ActivityHeader;