import { useEffect, useState } from "react";

function InstallPrompt() {

    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [installed, setInstalled] = useState(false);

    useEffect(() => {

        const handleBeforeInstallPrompt = (e) => {
            console.log("beforeinstallprompt fired");
            e.preventDefault();

            setDeferredPrompt(e);

        };

        const handleInstalled = () => {

            setInstalled(true);

            setDeferredPrompt(null);

        };

        window.addEventListener(
            "beforeinstallprompt",
            handleBeforeInstallPrompt
        );

        window.addEventListener(
            "appinstalled",
            handleInstalled
        );

        return () => {

            window.removeEventListener(
                "beforeinstallprompt",
                handleBeforeInstallPrompt
            );

            window.removeEventListener(
                "appinstalled",
                handleInstalled
            );

        };

    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt || installed) {
            return;
        }

        deferredPrompt.prompt();

        const { outcome } =
            await deferredPrompt.userChoice;

        if (outcome === "accepted") {

            setInstalled(true);

        }

        setDeferredPrompt(null);

    };

    if (!deferredPrompt || installed) {
        return null;
    }

    return (

        <div
            className="
            fixed
            bottom-28
            left-1/2
            z-50

            w-full
            max-w-[420px]

            -translate-x-1/2

            px-5
        "
        >

            <div
                className="
                flex
                items-center
                justify-between
                gap-4

                rounded-[28px]

                border
                border-[#90B137]

                bg-[#7F9E2F]

                px-5
                py-4

                text-white

                shadow-2xl
            "
            >

                <div className="min-w-0">

                    <h3 className="text-lg font-semibold">

                        Install FlowZen

                    </h3>

                    <p className="mt-1 text-sm text-white/80">

                        Install the app for a faster, app-like experience.

                    </p>

                </div>

                <button

                    onClick={handleInstall}

                    className="
                    shrink-0

                    rounded-full

                    bg-white

                    px-6
                    py-3

                    font-semibold

                    text-[#7F9E2F]

                    transition-all

                    hover:scale-105
                    active:scale-95
                "

                >

                    Install

                </button>

            </div>

        </div>

    );

}

export default InstallPrompt;