import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
// import { resolve } from "path"; // Removed because 'path' is not available in browser/Vite config

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
  ],
  // Vitest configuration should be placed in vitest.config.ts or package.json
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    // You can add supported server options here, such as port, open, etc.
  },
  base: "/bigiron-digital-design-system/", // Ensures relative paths for assets
});
