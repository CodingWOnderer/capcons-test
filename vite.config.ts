import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import topLevelAwait from "vite-plugin-top-level-await";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import wasm from "vite-plugin-wasm";

const virtualRouteFileChangeReloadPlugin: PluginOption = {
  name: "watch-config-restart",
  configureServer(server) {
    server.watcher.add("./src/routes.ts");
    server.watcher.on("change", (path) => {
      if (path.endsWith("src/routes.ts")) {
        console.log("Virtual route changed");
        server.restart();
      }
    });
  },
};

export default defineConfig(({ mode }) => {
  return {
    server: {
      allowedHosts: ["v2.api.capcons.ai"],
      port: 3000,
      proxy: {
        "api/v2": {
          target: "https://v2.api.capcons.ai/",
          secure: false,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/v1/, "stage"),
        },
      },
    },
    plugins: [
      tsconfigPaths(),
      nodePolyfills({
        globals: {
          Buffer: true,
        },
      }),
      wasm(),
      topLevelAwait(),
      tanstackRouter({
        target: "react",
        autoCodeSplitting: true,
        virtualRouteConfig: "./src/routes.ts",
      }),
      react(),
      tailwindcss(),
      virtualRouteFileChangeReloadPlugin,
    ],
  };
});
