import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function QuickActions() {

    const navigate = useNavigate();

    return (

        <button

            onClick={() => navigate("/create")}

            className="
                w-full
                rounded-2xl
                bg-[#7F9E2F]
                py-4

                flex
                items-center
                justify-center
                gap-2

                text-white
                font-semibold

                active:scale-95
                transition
            "

        >

            <Plus size={20} />

            Create New Order

        </button>

    );

}

export default QuickActions;