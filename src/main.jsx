import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ScrollToTop from './components/ScrollToTop.jsx';
import "./index.css";
import Header from "./components/Header.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Story from "./pages/Story.jsx";
import Services from "./pages/ServicePage.jsx";
import Banner from "./pages/Banner.jsx"
import WorkPage from "./pages/WorkPage.jsx";
import ResiliencePage from "./pages/ResiliencePage.jsx";
import ResilienceCourse from "./components/Resilience.jsx"
import ResourcesPage from "./pages/ResourcesPage.jsx";
import QuitPage from "./pages/QuitPage.jsx";
import StressPage from "./pages/StressPage.jsx";
import StressCourse from "./components/Stress.jsx";
import QuitTobaccoCourse from "./components/Quit.jsx";

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/story",
        element: <Story />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/banner",
        element: <Banner />,
      },
      {
        path: "/resources",
        element: <ResourcesPage />,
      },
      {
        path: "/work",
        element: <WorkPage />,
      },
      {
        path: "/resilience",
        element: <ResiliencePage />,
      },
      {
        path: "/resilience/:id",
        element: <ResilienceCourse />,
      },
      {
        path: "/quit",
        element: <QuitPage />,
      },
      {
        path: "/quit/:id",
        element: <QuitTobaccoCourse />,
      },
      {
        path: "/stress",
        element: <StressPage />,
      },
      {
        path: "/stress/:id",
        element: <StressCourse />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
