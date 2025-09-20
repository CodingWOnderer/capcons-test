import {
	index,
	layout,
	rootRoute,
	route,
	type VirtualRouteNode,
} from "@tanstack/virtual-file-routes";

const middleware = (fileName: string, virtualRoutes: VirtualRouteNode[]) =>
	layout(`middlewares/${fileName}`, virtualRoutes);


const CircleRoutes = route("/circle", [
		index("circle/route.tsx"),
		route("/$circleid", [index("circle/dashboard/$circleid.tsx")]),
	])

export const routes = rootRoute("root.tsx", [
	route("/forgot-password", "auth/ForgotPassword/route.tsx"),
	route("/signup", "auth/Signup/route.tsx"),
	route("/login", "auth/LoginPage/route.tsx"),
	route("/circlecreation", "auth/circlecreation/route.tsx"),
	middleware("authenticate.tsx", [index("index.tsx"),CircleRoutes]),
]);
