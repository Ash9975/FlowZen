import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ActivityHeader() {

    const navigate = useNavigate();

    return (
        <div className="mb-8">

            <button
                onClick={() => navigate(-1)}
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E7EDD9] bg-[#FAFCF5]"
            >
                <ArrowLeft size={20} />
            </button>

            <h1 className="text-4xl font-black text-[#23330F]">
                Activity
            </h1>

            <p className="mt-2 text-[#667085]">
                Track everything happening in FlowZen.
            </p>

        </div>
    );
}

export default ActivityHeader;