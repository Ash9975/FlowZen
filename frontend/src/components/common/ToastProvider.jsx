import { Toaster } from "react-hot-toast";

function ToastProvider() {

    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={10}
            toastOptions={{
                duration: 3000,

                style: {
                    borderRadius: "16px",
                    background: "#FFFFFF",
                    color: "#111827",
                    border: "1px solid #E5E7EB",
                    boxShadow:
                        "0 10px 30px rgba(0,0,0,0.08)",
                    fontSize: "14px",
                },

                success: {
                    iconTheme: {
                        primary: "#7F9E2F",
                        secondary: "#FFFFFF",
                    },
                },

                error: {
                    iconTheme: {
                        primary: "#EF4444",
                        secondary: "#FFFFFF",
                    },
                },
            }}
        />
    );

}

export default ToastProvider;