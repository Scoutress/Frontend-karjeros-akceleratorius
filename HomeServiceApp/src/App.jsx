import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import { routes } from "./navigation/routes";
const Root = () => {
  return (
    <>
      <Header />
      <hr />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: routes.rootPage,
    element: <Root />,
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
        path: routes.errorPage,
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
