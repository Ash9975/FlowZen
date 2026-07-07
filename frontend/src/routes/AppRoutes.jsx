import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

import MainLayout from "../layouts/MainLayout";
import PageLoader from "../components/common/PageLoader";

const Landing = lazy(() => import("../pages/Landing"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Orders = lazy(() => import("../pages/Orders"));
const Activity = lazy(() => import("../pages/Activity"));
const Profile = lazy(() => import("../pages/Profile"));
const CreateOrder = lazy(() => import("../pages/CreateOrder"));
const OrderDetails = lazy(() => import("../pages/OrderDetails"));
const EditChecklist = lazy(() => import("../pages/EditChecklist"));
const NotFound = lazy(() => import("../pages/NotFound"));
function AppRoutes() {

    return (

        <Suspense fallback={<PageLoader />}>

            <Routes>

                {/* Public Routes */}

                <Route
                    path="/"
                    element={
                        <PublicRoute>
                            <Landing />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />

                {/* Protected Routes */}

                <Route
                    element={
                        <ProtectedRoute>
                            <MainLayout />
                        </ProtectedRoute>
                    }
                >

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/orders"
                        element={<Orders />}
                    />

                    <Route
                        path="/activity"
                        element={<Activity />}
                    />

                    <Route
                        path="/profile"
                        element={<Profile />}
                    />

                    <Route
                        path="/create"
                        element={<CreateOrder />}
                    />

                    <Route
                        path="/orders/:id"
                        element={<OrderDetails />}
                    />

                    <Route
                        path="/orders/:id/edit"
                        element={<EditChecklist />}
                    />

                    <Route
                        path="*"
                        element={<NotFound />}
                    />

                </Route>

            </Routes>

        </Suspense>

    );

}

export default AppRoutes;