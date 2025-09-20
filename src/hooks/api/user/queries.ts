import { apiRequest } from "@/config/request";
import type {
	TServerConfigResponse,
	TServerConfig,
	TUserCirclesList,
} from "./types";

export const CapconsDashboardKeys = {
	getServerConfig: "server-config",
	getUserCirclesList: "circles-list",
};

export const dashboardQueryKeys = {
	serverConfig: () => [CapconsDashboardKeys.getServerConfig] as const,
	getUsersCirclList: () => [CapconsDashboardKeys.getUserCirclesList],
};

export const fetchServerConfig = async (): Promise<TServerConfig> => {
	const { data } =
		await apiRequest.get<TServerConfigResponse>("/auth/user-details",{
			withCredentials:true
		});
	return data.data;
};

export const fetchCirclesList = async ():Promise<TUserCirclesList["roles"]> => {
	const { data } =
		await apiRequest.get<TUserCirclesList>(`auth/role-list/user`);
	return data.roles;
};
