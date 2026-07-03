import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import api from "./api/axios";

import SplashScreen from "./components/splash/SplashScreen";
import AppRoutes from "./routes/AppRoutes";

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

  return (
    <>
      <AppRoutes />

      <AnimatePresence mode="wait">
        {loading && <SplashScreen />}
      </AnimatePresence>
    </>
  );
}

export default App;