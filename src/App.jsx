import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import Careers from "./pages/careers/Careers.jsx";
import HeadNavbar from "./pages/Header/HeaderNavbar.jsx";
import Footer from "./pages/Footer/Footer.jsx";
import AdminLayout from "./pages/admin/AdminLayout.jsx";
import Services from "./pages/Services/Services.jsx";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/main" />,
  },
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        path: "/main",
        element: <Navigate to="/main/Home" />,
      },
      {
        path: "Home",
        element: <Home />,
        children: [],
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "Careers",
        element: <Careers />,
      },
    ],
  },
  {
    path: "/Admin",
    element: <AdminLayout />,
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
