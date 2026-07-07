import { RefreshCcw, TriangleAlert } from "lucide-react";

function QueryErrorState({

    title = "Something went wrong",

    message = "We couldn't load this data.",

    onRetry,

    loading = false,

}) {

    return (

        <div className="flex min-h-[60vh] items-center justify-center px-6">

            <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-sm">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">

                    <TriangleAlert
                        size={42}
                        className="text-red-500"
                    />

                </div>

                <h2 className="mt-6 text-2xl font-bold text-gray-900">

                    {title}

                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500">

                    {message}

                </p>

                <button

                    onClick={onRetry}

                    disabled={loading}

                    className="
                        mt-8

                        inline-flex
                        items-center
                        gap-2

                        rounded-2xl

                        bg-[#7F9E2F]

                        px-6
                        py-3

                        font-semibold

                        text-white

                        transition

                        hover:opacity-90

                        disabled:cursor-not-allowed
                        disabled:opacity-70
                    "

                >

                    <RefreshCcw
                        size={18}
                        className={
                            loading
                                ? "animate-spin"
                                : ""
                        }
                    />

                    {loading
                        ? "Retrying..."
                        : "Retry"}

                </button>

            </div>

        </div>

    );

}

export default QueryErrorState;