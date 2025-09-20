import { dashboardQueryKeys, fetchCirclesList } from "@/hooks/api/user/queries";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useCircleList = () => {
	const { data: CircleList } = useSuspenseQuery({
		queryKey: dashboardQueryKeys.getUsersCirclList(),
		queryFn: fetchCirclesList,
		staleTime: Infinity,
	});
	return {circlelist:CircleList};
};
