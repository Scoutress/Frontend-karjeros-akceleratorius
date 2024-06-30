import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import { routes } from "./navigation/Routes";
import Categories from "./pages/Categories";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
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
      {
        path: routes.serviceCleaning,
        element: <Categories />,
      },
      {
        path: routes.serviceRepair,
        element: <Categories />,
      },
      {
        path: routes.servicePainting,
        element: <Categories />,
      },
      {
        path: routes.serviceShifting,
        element: <Categories />,
      },
      {
        path: routes.servicePlumbing,
        element: <Categories />,
      },
      {
        path: routes.serviceElectric,
        element: <Categories />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
