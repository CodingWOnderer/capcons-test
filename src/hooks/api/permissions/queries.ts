import { apiRequest } from "@/config/request";
import type { UserPermissionsResponse, UserRole } from "./types";


const PermissionKeys = {
    getAllUserPermissions:["user-permissions"] as const,
}

export const userPermissionsQueryKeys = {
	byUserAndCircle: (params: { circleId: string; userId: string }) =>
		[PermissionKeys.getAllUserPermissions, params] as const,
};

export const fetchUserPermissions = async (params: {
	circleId: string;
	userId: string;
}): Promise<UserRole> => {
	const { circleId, userId } = params;

	const response = await apiRequest.get<UserPermissionsResponse>(
		`auth/roles/user?circle_id=${circleId}&user_id=${userId}`,
	);

	return response.data.role;
};
