import { apiRequest } from "@/config/request";
import type { TCirclesData } from "./types";

const CirclesInfoKeys = {
	getCircleInfo: "circle-info",
};

export const CircleQueryKeys = {
	getCircleInfo: (filter:string) => [CirclesInfoKeys.getCircleInfo,filter],
};
export const fetchCircleInfo = async (circleIds: string[]) => {
	const { data } = await apiRequest.get<TCirclesData>(
		`circles/circlelist/mini?circles=${encodeURIComponent(circleIds.join(","))}`,
	);

	return data.circles
};
