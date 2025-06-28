import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("api/subscribe", "routes/api.subscribe.tsx"),
] satisfies RouteConfig;
