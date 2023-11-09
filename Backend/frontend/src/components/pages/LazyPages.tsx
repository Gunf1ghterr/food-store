import { lazy } from "react";

export const HomePage = lazy(() =>
  import(".././pages/HomePage").then((module) => ({ default: module.HomePage }))
);

export const Payments = lazy(() =>
  import(".././pages/Payments").then((module) => ({ default: module.Payments }))
);

export const Agreement = lazy(() =>
  import(".././pages/UserAgreement").then((module) => ({
    default: module.Agreement,
  }))
);

export const Offers = lazy(() =>
  import(".././pages/Offers").then((module) => ({ default: module.Offers }))
);

export const Policy = lazy(() =>
  import(".././pages/Policy").then((module) => ({ default: module.Policy }))
);

export const About = lazy(() =>
  import(".././pages/About").then((module) => ({ default: module.About }))
);

export const Feedback = lazy(() =>
  import(".././pages/Feedback").then((module) => ({ default: module.Feedback }))
);

export const Checkout = lazy(() =>
  import(".././pages/Checkout").then((module) => ({ default: module.Checkout }))
);
