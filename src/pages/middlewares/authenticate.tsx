import { redirect, createFileRoute } from "@tanstack/react-router";
import { createNotification } from "@/components/notifications";
import {
	dashboardQueryKeys,
	fetchCirclesList,
} from "@/hooks/api/user/queries";
import type { TUserCirclesList } from "@/hooks/api/user/types";

const isPartOfCircle = (circlelists: TUserCirclesList["roles"]) =>
	Boolean(circlelists.length > 0);

export const Route = createFileRoute("/_authenticate")({
	beforeLoad: async ({ context }) => {
		if (!context.serverConfig) {
			throw redirect({ to: "/login" });
		}

		const circleLists = await context.queryClient
			.ensureQueryData({
				queryKey: dashboardQueryKeys.getUsersCirclList(),
				queryFn: fetchCirclesList,
			})
			.catch(() => {
				createNotification({
					type: "error",
					title: "No Workspace Found",
					text: "You don’t have any active workspaces yet. Please create a workspace to continue.",
				});

				throw redirect({
					to: "/login",
				});
			});

		if (!isPartOfCircle(circleLists)) {
			throw redirect({ to: "/circlecreation" });
		}

		return { circleLists };
	},
});
