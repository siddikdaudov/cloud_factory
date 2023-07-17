export const API_URL = "https://poloniex.com/public?command=returnTicker";

export const ROUTES = {
  root: "/",
  rate_a: "/rate_a",
  rate_b: "/rate_b",
};

export const PATH_NAME = new Map([
  [ROUTES.root, "О приложении"],
  [ROUTES.rate_a, "Котировки А"],
  [ROUTES.rate_b, "Котировки В"],
]);
