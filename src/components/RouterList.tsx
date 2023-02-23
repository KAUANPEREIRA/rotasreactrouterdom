import { useRoutes } from "react-router-dom";
import { About } from "../pages/About";
import { AboutItem } from "../pages/AboutItem";
import Home from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { RequireAuth } from "./Auth/RequireAuth";

export const RouterList = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/About",
      element: (
        <RequireAuth>
          <About />
        </RequireAuth>
      ),
    },
    { path: "/about/:slug", element: <AboutItem /> },
    { path: "*", element: <NotFound /> },
  ]);
};
