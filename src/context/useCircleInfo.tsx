import { CircleQueryKeys, fetchCircleInfo } from "@/hooks/api/circle/queries";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";

export const useCircleInfo = () => {
	const param = useParams({
		from: "/_authenticate/circle/$circleid/",
	});

	const { data: circleInfo } = useSuspenseQuery({
		queryKey: CircleQueryKeys.getCircleInfo(param.circleid),
		queryFn: () => fetchCircleInfo([param.circleid]),
		staleTime: Infinity,
	});

	return { circleInfo };
};
