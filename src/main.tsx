import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { NProgress } from "nprogress-v2";
import "@fontsource-variable/inter/index.css";
import "./index.css";

NProgress.configure({ showSpinner: false });

window.addEventListener("vite:preloadError", async (event) => {
  event.preventDefault();
  // Get current count from session storage or initialize to 0
  const reloadCount = parseInt(
    sessionStorage.getItem("vitePreloadErrorCount") || "0",
    10
  );

  // Check if we've already tried 3 times
  if (reloadCount >= 2) {
    console.warn(
      "Vite preload has failed multiple times. Stopping automatic reload."
    );
    // Optionally show a user-facing message here
    return;
  }

  try {
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    }
  } catch (cleanupError) {
    console.error(cleanupError);
  }
  // Increment and save the counter
  sessionStorage.setItem("vitePreloadErrorCount", (reloadCount + 1).toString());

  console.log(`Reloading page (attempt ${reloadCount + 1} of 2)...`);
  window.location.reload(); // for example, refresh the page
});

// // Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { queryClient } from "./hooks/reactQuery";
import { ErrorPage } from "./pages/public/ErrorPage/ErrorPage";
import { Lottie } from "./components/spinner/lottie";
import { ThemeProvider } from "next-themes";
import { TemplateNotFoundErrorPage } from "./pages/public/ErrorPage/NoSearchParamErrorPage";

const router = createRouter({
  routeTree,
  context: { serverConfig: null, queryClient },
  defaultNotFoundComponent: TemplateNotFoundErrorPage,
  defaultErrorComponent: ErrorPage,
  defaultSsr: true,
  defaultPendingMs: 0,
  defaultPendingComponent: () => (
    <div className="flex justify-center items-center h-screen w-screen fixed z-50 overflow-clip dark:bg-gradient-to-tr dark:from-mineshaft-700 dark:via-mineshaft-800 dark:to-bunker-700">
      <Lottie isAutoPlay className=" h-32" />
    </div>
  ),
});

router.subscribe("onBeforeLoad", ({ pathChanged }) => {
  if (pathChanged) {
    NProgress.start();
    const timer = setTimeout(() => {
      clearTimeout(timer);
      NProgress.done();
    }, 2000);
  }
});
router.subscribe("onLoad", () => NProgress.done());

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
}
