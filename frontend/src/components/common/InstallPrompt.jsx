import { useEffect, useState } from "react";

function InstallPrompt() {

    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [installed, setInstalled] = useState(false);

    useEffect(() => {

        const handleBeforeInstallPrompt = (e) => {

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
                bottom-24
                left-4
                right-4
                z-50

                rounded-2xl

                bg-[#7F9E2F]

                p-4

                text-white

                shadow-xl
            "
        >

            <div className="flex items-center justify-between gap-4">

                <div>

                    <h3 className="font-semibold">

                        Install FlowZen

                    </h3>

                    <p className="text-sm text-white/80">

                        Install the app for a faster, app-like experience.

                    </p>

                </div>

                <button

                    onClick={handleInstall}

                    className="
                        rounded-xl
                        bg-white
                        px-4
                        py-2
                        font-semibold
                        text-[#7F9E2F]
                        transition
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