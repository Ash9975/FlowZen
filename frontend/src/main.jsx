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

registerSW({
  immediate: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(

  <QueryClientProvider client={queryClient}>

    <BrowserRouter>

      <AuthProvider>

        <App />

      </AuthProvider>

    </BrowserRouter>

    <ToastProvider />

    <ReactQueryDevtools initialIsOpen={false} />

  </QueryClientProvider>

);