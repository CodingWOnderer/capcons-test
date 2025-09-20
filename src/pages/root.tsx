import { queryClient } from "../hooks/reactQuery";
import {
  createRootRouteWithContext,
  Outlet
} from "@tanstack/react-router";
import {
  NotificationContainer,
} from "../components/notifications";
import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import type { TServerConfig } from "@/hooks/api/user/types";
import {
  dashboardQueryKeys,
  fetchServerConfig,
} from "@/hooks/api/user/queries";
import {
  dashboardSession,
  dashboardSessionRefresh,
} from "@/hooks/api/auth/queries";

type TRouterContext = {
  serverConfig: TServerConfig | null;
  queryClient: QueryClient;
};

const RootPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <Outlet />
        <NotificationContainer />
    </QueryClientProvider>
  );
};

export const Route = createRootRouteWithContext<TRouterContext>()({
  component: RootPage,
  beforeLoad: async ({ context }) => {
     try {
      await context.queryClient.ensureQueryData({
        queryKey: dashboardSession.sessionConfig(),
        queryFn: dashboardSessionRefresh,
      });

      const serverConfig = await context.queryClient.ensureQueryData({
        queryKey: dashboardQueryKeys.serverConfig(),
        queryFn: fetchServerConfig,
      });

      return { serverConfig: serverConfig };
    } catch (error) {
      return { serverConfig: null }}
  },
});
