import { useEffect, useState } from "react";

import {
    showSuccess,
    showError,
} from "../../lib/toast";

function NetworkStatus() {

    const [isOnline, setIsOnline] = useState(
        navigator.onLine
    );

    useEffect(() => {

        const handleOnline = () => {

            setIsOnline(true);

            showSuccess(
                "You're back online."
            );

        };

        const handleOffline = () => {

            setIsOnline(false);

            showError(
                "You're offline. Check your internet connection."
            );

        };

        window.addEventListener(
            "online",
            handleOnline
        );

        window.addEventListener(
            "offline",
            handleOffline
        );

        return () => {

            window.removeEventListener(
                "online",
                handleOnline
            );

            window.removeEventListener(
                "offline",
                handleOffline
            );

        };

    }, []);

    if (isOnline) return null;

    return (

        <div
            className="
                fixed
                top-0
                left-0
                right-0
                z-[9999]

                bg-red-600

                px-4
                py-3

                text-center
                text-sm
                font-medium
                text-white
            "
        >

            📡 You're offline.
            Some features may not work.

        </div>

    );

}

export default NetworkStatus;