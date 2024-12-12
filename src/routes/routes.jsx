import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import Careers from "../pages/careers/Careers";
import { Navigate } from "react-router-dom";
import MainLayout from "../pages/mainLayout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/Home" />, // Correctly use <Navigate />
      },
      {
        path: "/Home",
        element: <Home />,
        children: [],
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/Careers",
        element: <Careers />,
      },
    ],
  },
]);
