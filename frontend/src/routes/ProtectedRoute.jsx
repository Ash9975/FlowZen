import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white">
        <div className="flex gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#76A30D] animate-bounce [animation-delay:.2s]"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#76A30D] animate-bounce [animation-delay:.4s]"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#76A30D] animate-bounce [animation-delay:.6s]"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;