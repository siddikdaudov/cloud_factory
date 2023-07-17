import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../routes/Root";
import RateA from "../routes/RateA";
import RateB from "../routes/RateB";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "rate_a",
        element: <RateA />,
      },
      {
        path: "rate_b",
        element: <RateB />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
