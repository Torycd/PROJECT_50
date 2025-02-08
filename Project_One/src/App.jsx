import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./RootLayout";
import HomePage from "./Pages/HomePage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "Next-page",
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
