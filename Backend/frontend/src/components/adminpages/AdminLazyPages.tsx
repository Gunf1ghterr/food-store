import { lazy } from "react";

export const AdminPage = lazy(() =>
  import("../adminpages/AdminPage").then((module) => ({ default: module.AdminPage }))
);
export const AdminProducts = lazy(() =>
  import("../adminpages/AdminProducts").then((module) => ({ default: module.AdminProducts }))
);
export const AdminOffers = lazy(() =>
  import("../adminpages/AdminOffers").then((module) => ({ default: module.AdminOffers }))
);