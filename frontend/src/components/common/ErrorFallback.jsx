import { RefreshCcw, House } from "lucide-react";

function ErrorFallback({ error, resetErrorBoundary }) {

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">

                    <span className="text-4xl">⚠️</span>

                </div>

                <h1 className="mt-6 text-2xl font-bold text-gray-900">

                    Oops! Something went wrong

                </h1>

                <p className="mt-3 text-sm text-gray-500">

                    FlowZen encountered an unexpected error.
                    Please try again.

                </p>

                {import.meta.env.DEV && (

                    <pre className="mt-6 overflow-auto rounded-xl bg-gray-100 p-4 text-left text-xs text-red-600">

                        {error?.message}

                    </pre>

                )}

                <div className="mt-8 flex gap-3">

                    <button
                        onClick={resetErrorBoundary}
                        className="flex-1 rounded-xl bg-[#7F9E2F] px-4 py-3 text-white transition hover:opacity-90"
                    >

                        <span className="flex items-center justify-center gap-2">

                            <RefreshCcw size={18} />

                            Retry

                        </span>

                    </button>

                    <button
                        onClick={() => window.location.href = "/dashboard"}
                        className="flex-1 rounded-xl border px-4 py-3 transition hover:bg-gray-50"
                    >

                        <span className="flex items-center justify-center gap-2">

                            <House size={18} />

                            Dashboard

                        </span>

                    </button>

                </div>

            </div>

        </div>

    );

}

export default ErrorFallback;