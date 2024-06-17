import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const App = lazy(() => import("../App"));
import Home from "../pages/Home";
import Login from "../pages/Login";
import AllSupplies from "../components/ui/home/AllSupplies";
import DashboardLayout from "../components/layouts/DashboardLayout";
import SupplyCalculation from "../components/ui/dashboard/SupplyCalculation";
import CreateSupply from "../components/ui/dashboard/CreateSupply";
import DashboardAllSupplies from "../components/ui/dashboard/DashboardAllSupplies";
import SignUp from "../pages/SignUp";
import SupplyDetails from "../components/ui/home/SupplyDetails";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import CreateTestimonials from "../components/ui/dashboard/CreateTestimonials";
import Volunteer from "../pages/Volunteer";
import AboutUs from "../pages/AboutUsPage";
import Community from "../pages/Community";
import Leaderboard from "../pages/Leaderboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div>
            <h1 className="text-2xl">Loading...</h1>
          </div>
        }
      >
        <App></App>
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "all-supplies",
        element: <AllSupplies></AllSupplies>,
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "volunteer",
        element: <Volunteer></Volunteer>,
      },
      {
        path: "community",
        element: <Community></Community>,
      },
      {
        path: "leaderboard",
        element: <Leaderboard></Leaderboard>,
      },
      {
        path: "supplies/:id",
        element: <SupplyDetails></SupplyDetails>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout></DashboardLayout>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <SupplyCalculation></SupplyCalculation>
          </ProtectedRoute>
        ),
      },
      {
        path: "supplies",
        element: (
          <ProtectedRoute>
            <DashboardAllSupplies></DashboardAllSupplies>
          </ProtectedRoute>
        ),
      },
      {
        path: "create-supply",
        element: (
          <ProtectedRoute>
            {" "}
            <CreateSupply></CreateSupply>{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "create-testimonial",
        element: (
          <ProtectedRoute>
            {" "}
            <CreateTestimonials></CreateTestimonials>{" "}
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
