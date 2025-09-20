import { LocalStorageKey } from "@/const";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticate/circle/")({
	beforeLoad: async ({  context }) => {
		const activeCircle = localStorage.getItem(
			LocalStorageKey.CURRENT_ACTIVE_CIRCLE,
		)
		if (activeCircle) {
			throw redirect({
				to: "/circle/$circleid",
				params: { circleid: activeCircle },
			})
		}

		const initialCirclId = context.circleLists[0].circle_id;
		localStorage.setItem(LocalStorageKey.CURRENT_ACTIVE_CIRCLE, initialCirclId);

		throw redirect({
			to: "/circle/$circleid",
			params: { circleid: initialCirclId },
		})
	},
});
