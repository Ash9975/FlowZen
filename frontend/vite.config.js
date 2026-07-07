import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({

  plugins: [

    react(),

    tailwindcss(),

    VitePWA({

      registerType: "autoUpdate",

      devOptions: {
        enabled: true,
      },

      includeAssets: [
        "favicon-16x16.png",
        "favicon-32x32.png",
        "apple-touch-icon.png",
      ],

      manifest: {

        name: "FlowZen",

        short_name: "FlowZen",

        description:
          "AI-powered order management and packing checklist app.",

        theme_color: "#7F9E2F",

        background_color: "#FFFFFF",

        display: "standalone",

        orientation: "portrait",

        start_url: "/",

        scope: "/",

        icons: [
          {
            src: "logo-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "logo-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],

      },

      workbox: {

        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,woff2}"
        ],

      },

    }),

  ],

});