import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  { path: "shop", file: "routes/shop.tsx" },
  { path: "product/:id", file: "routes/product.$id.tsx" },
  { path: "cart", file: "routes/cart.tsx" },
  { path: "checkout", file: "routes/checkout.tsx" },
] satisfies RouteConfig;