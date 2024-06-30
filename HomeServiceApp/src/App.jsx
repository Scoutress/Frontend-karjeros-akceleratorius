import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import { routes } from "./navigation/Routes";
import Categories from "./pages/categories/Categories";

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
        path: routes.categoryPage,
        element: <Categories />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
