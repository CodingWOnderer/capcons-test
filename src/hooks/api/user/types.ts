export interface TServerConfig {
	user_id: string;
	email: string;
	phone_number: string;
	country_code: string;
	is_email_verified: boolean;
	is_phone_verified: boolean;
	required_2fa: boolean;
	merged_user_id: string;
	kyc_status: "pending" | "approved" | "rejected" | string;
	name: string;
}

export interface TServerConfigResponse {
	data: TServerConfig;
	status: "successfull" | "failed" | string;
}

export interface TUserCirclesList {
	message: string;
	roles: {
		id: string;
		circle_id: string;
		role_name: string;
		hierarchy: number;
		permissions: string[];
	}[];
}
