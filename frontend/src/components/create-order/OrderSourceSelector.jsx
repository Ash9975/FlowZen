import {
    FileText,
    Image,
    Camera,
} from "lucide-react";

const options = [
    {
        id: "text",
        label: "Paste Text",
        icon: FileText,
    },
    {
        id: "upload",
        label: "Upload",
        icon: Image,
    },
    
];

function OrderSourceSelector({
    source,
    setSource,
}) {

    return (

        <div className="mt-6">

            <label className="text-[15px] font-bold text-gray-600">

                Choose Order Source

            </label>

            <div className="mt-3 grid grid-cols-2 gap-3">

                {options.map(option => {

                    const Icon = option.icon;

                    const active =
                        source === option.id;

                    return (

                        <button
                            key={option.id}
                            type="button"
                            onClick={() =>
                                setSource(option.id)
                            }
                            className={`
                                flex
                                flex-col
                                items-center
                                justify-center

                                rounded-2xl
                                border

                                p-4

                                transition

                                ${active
                                    ? "border-primary bg-primary text-white shadow-md"
                                    : "border-gray-200 bg-white text-gray-600 hover:border-primary"}
                            `}
                        >

                            <Icon size={24} />

                            <span className="mt-2 text-sm font-semibold">

                                {option.label}

                            </span>

                        </button>

                    );

                })}

            </div>

        </div>

    );

}

export default OrderSourceSelector;