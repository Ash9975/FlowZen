import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { registerSW } from "virtual:pwa-register";

import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";

import queryClient from "./lib/queryClient";
import ToastProvider from "./components/common/ToastProvider";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/common/ErrorFallback";

registerSW({
  immediate: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(

  <QueryClientProvider client={queryClient}>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      <BrowserRouter>

        <AuthProvider>

          <App />

        </AuthProvider>

      </BrowserRouter>
    </ErrorBoundary>

    <ToastProvider />

    <ReactQueryDevtools initialIsOpen={false} />

  </QueryClientProvider>

);