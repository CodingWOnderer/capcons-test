import type {  MongoAbility, MongoQuery } from "@casl/ability";

export enum DashboardPermissionsActions {
  Read = "read",
  Create = "create",
  Update = "update",
  Delete = "delete",
  Manage = "manage",
}

export enum DashboardPermissionConditionOperators {
  $IN = "$in",
  $ALL = "$all",
  $REGEX = "$regex",
  $EQ = "$eq",
  $NEQ = "$ne",
  $GLOB = "$glob",
  $ELEMENTMATCH = "$elemMatch",
}

export enum DashboardPermissionsSubjects {
  Dashboard = "dashboard",
  Product = "product",
  Blog = "blog",
  Settings = "settings",
  Refund = "refund",
  User = "user",
  Order = "orders",
  Role = "role",
  Coupon = "coupons",
  All = "all", 
}

export type DashboardPermissionsSet = [DashboardPermissionsActions, DashboardPermissionsSubjects];

export type TDashboardPermissions = MongoAbility<DashboardPermissionsSet,MongoQuery>;

export interface UserRole {
  _id: string;
  role_name: string;
  circle_id: string;
  hierarchy: number;
  permissions: string[];
}

export interface UserPermissionsResponse {
  message: string;
  role: UserRole;
}
