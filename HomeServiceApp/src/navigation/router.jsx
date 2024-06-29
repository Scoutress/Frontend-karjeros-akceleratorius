import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import routes from "../navigarion/routes";

const router = createBrowserRouter([
  {
    path: routes.homePage,
    element: <Home />,
  },
  {
    path: routes.servicesPage,
    element: <Services />,
  },
  {
    path: routes.aboutPage,
    element: <About />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
