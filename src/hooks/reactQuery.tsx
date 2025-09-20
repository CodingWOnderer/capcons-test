import { createNotification } from "@/components/notifications";
import { MutationCache, QueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";

export const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onError: (error: unknown) => {
      if (isAxiosError(error)) {
        const serverResponse = error?.response?.data;
        if (serverResponse?.message) {
          createNotification({
            type: "error",
            title: "",
            text: `${serverResponse?.message}`,
          });
        } else {
          createNotification({
            title: "Bad Request",
            type: "error",
            text: `${serverResponse.message}${
              serverResponse.message?.endsWith(".") ? "" : "."
            }`,
          });
        }
      }
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});
