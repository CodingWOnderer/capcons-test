import { CircleQueryKeys, fetchCircleInfo } from "@/hooks/api/circle/queries";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { isAxiosError } from "axios";
import { CircleErrorHandling } from "../components/error-handline";
import { DashboardLayout } from ".";

export const Route = createFileRoute("/_authenticate/circle/$circleid/")({
	beforeLoad: ({ params }) => {
		if (!params.circleid) {
			throw redirect({ to: "/circle" });
		}
	},
	loader: async ({ params, context }) => {
		try {
			const data = await context.queryClient.ensureQueryData({
				queryKey: CircleQueryKeys.getCircleInfo(params.circleid),
				queryFn: () => fetchCircleInfo([params.circleid!]),
			});

			if (!data?.length) {
				throw new Error("EMPTY_CIRCLE");
			}

			return { circleid: params.circleid };
		} catch (error) {
			if (isAxiosError(error) && error.response?.status === 400) {
				throw new Error("INVALID_CIRCLE");
			}
			throw error;
		}
	},
	component: DashboardLayout,
	errorComponent: CircleErrorHandling,
});
