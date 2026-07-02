import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Activity from "../pages/Activity";
import Profile from "../pages/Profile";
import CreateOrder from "../pages/CreateOrder";
import OrderDetails from "../pages/OrderDetails";
import EditChecklist from "../pages/EditChecklist";

import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
    return (
        <Routes>

            {/* Public Routes */}

            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

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

            </Route>

        </Routes>
    );
}

export default AppRoutes;