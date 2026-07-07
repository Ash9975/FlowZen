function PageLoader() {

    return (

        <div className="min-h-screen flex items-center justify-center bg-white">

            <div className="flex gap-2">

                <div className="h-3 w-3 rounded-full bg-[#7F9E2F] animate-bounce" />

                <div
                    className="h-3 w-3 rounded-full bg-[#7F9E2F] animate-bounce"
                    style={{
                        animationDelay: ".15s",
                    }}
                />

                <div
                    className="h-3 w-3 rounded-full bg-[#7F9E2F] animate-bounce"
                    style={{
                        animationDelay: ".3s",
                    }}
                />

            </div>

        </div>

    );

}

export default PageLoader;