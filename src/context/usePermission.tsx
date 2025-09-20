import {
  fetchUserPermissions,
  userPermissionsQueryKeys,
} from "@/hooks/api/permissions/queries";
import {
  DashboardPermissionsActions,
  DashboardPermissionsSubjects,
  type TDashboardPermissions,
} from "@/hooks/api/permissions/types";
import { createMongoAbility } from "@casl/ability";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams, useRouteContext } from "@tanstack/react-router";

export const useUserPermissions = () => {
  const { circleid: circleId } = useParams({
    from: "/_authenticate/circle/$circleid/",
  });

  const serverconfig = useRouteContext({
    from: "/_authenticate/circle/$circleid/",
    select: (ctx) => ctx.serverConfig,
  });

  if (!serverconfig?.user_id) {
    throw new Error(
      "[useUserPermissions] Cannot fetch permissions: userId is missing."
    );
  }

  return useSuspenseQuery({
    queryKey: userPermissionsQueryKeys.byUserAndCircle({
      circleId,
      userId: serverconfig.user_id,
    }),
    queryFn: () =>
      fetchUserPermissions({ circleId, userId: serverconfig?.user_id }),
    staleTime: Infinity,
    select: (data): TDashboardPermissions => {
      const permissions = data.permissions;

      if (permissions.includes("*")) {
        return createMongoAbility([
          {
            action: DashboardPermissionsActions.Manage,
            subject: DashboardPermissionsSubjects.All,
          },
        ]);
      }

      if (
        permissions.length === 0 ||
        data.role_name.toLowerCase() === "no-access"
      ) {
        return createMongoAbility([]);
      }

      const rules = permissions
        .map((permission: string) => {
          const [subject, action] = permission.split(".");

          const validAction = Object.values(
            DashboardPermissionsActions
          ).includes(action as DashboardPermissionsActions);
          const validSubject = Object.values(
            DashboardPermissionsSubjects
          ).includes(subject as DashboardPermissionsSubjects);

          if (!validAction || !validSubject) {
            console.warn(`Invalid permission: ${permission}`);
            return null;
          }

          return {
            action: action as DashboardPermissionsActions,
            subject: subject as DashboardPermissionsSubjects,
          };
        })
        .filter(
          (
            rule
          ): rule is {
            action: DashboardPermissionsActions;
            subject: DashboardPermissionsSubjects;
          } => rule !== null
        );

      return createMongoAbility(rules);
    },
  });
};
