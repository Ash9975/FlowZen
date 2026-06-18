import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import CreateOrder from "../pages/CreateOrder";
import OrderDetails from "../pages/OrderDetails";
import EditChecklist from "../pages/EditChecklist";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/create"
        element={
          <ProtectedRoute>
            <CreateOrder />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders/:id"
        element={
          <ProtectedRoute>
            <OrderDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders/:id/edit"
        element={
          <ProtectedRoute>
            <EditChecklist />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;