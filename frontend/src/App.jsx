import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import api from "./api/axios";

import SplashScreen from "./components/splash/SplashScreen";
import NetworkStatus from "./components/common/NetworkStatus";
import AppRoutes from "./routes/AppRoutes";

import InstallPrompt from "./components/common/InstallPrompt";
import { useAuth } from "./context/AuthContext";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    wakeBackend();
  }, []);

  const wakeBackend = async () => {
    const maxRetries = 12;

    for (let i = 0; i < maxRetries; i++) {
      try {
        await api.get("/health");
        break;
      } catch {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    setLoading(false);
  };

  const {user} = useAuth();
  
  return (
    <>
      <NetworkStatus />

      {user && <InstallPrompt />}

      <AppRoutes />

      <AnimatePresence mode="wait">
        {loading && <SplashScreen />}
      </AnimatePresence>
    </>
  );
}

export default App;