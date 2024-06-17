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
import Dashboard from "../components/ui/dashboard/Dashboard";
import AllUsers from "../components/ui/dashboard/admin/AllUsers";
import AllReviews from "../components/ui/dashboard/admin/AllReviews";
import AllDonations from "../components/ui/dashboard/admin/AllDonations";
import MyDonation from "../components/ui/dashboard/user/MyDonation";
import AddDonation from "../components/ui/dashboard/user/AddDonation";
import AddReview from "../components/ui/dashboard/user/AddReview";
import MyReview from "../components/ui/dashboard/user/MyReview";

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
            <Dashboard></Dashboard>
          </ProtectedRoute>
        ),
      },
      {
        path: "all-donation",
        element: (
          <ProtectedRoute>
            <AllDonations></AllDonations>
          </ProtectedRoute>
        ),
      },

      {
        path: "users",
        element: (
          <ProtectedRoute>
            <AllUsers></AllUsers>
          </ProtectedRoute>
        ),
      },
      {
        path: "reviews",
        element: (
          <ProtectedRoute>
            <AllReviews></AllReviews>
          </ProtectedRoute>
        ),
      },
      {
        path: "my-donation",
        element: (
          <ProtectedRoute>
            <MyDonation></MyDonation>
          </ProtectedRoute>
        ),
      },
      {
        path: "add-donation",
        element: (
          <ProtectedRoute>
            <AddDonation></AddDonation>
          </ProtectedRoute>
        ),
      },
      {
        path: "add-review",
        element: (
          <ProtectedRoute>
            <AddReview></AddReview>
          </ProtectedRoute>
        ),
      },
      {
        path: "my-review",
        element: (
          <ProtectedRoute>
            <MyReview></MyReview>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
