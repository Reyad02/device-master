import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateAdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className="text-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if (user?.email === import.meta.env.VITE_ADMIN) {
        return children;
    }

    return (
        <Navigate to={"/login"} state={{ from: location.pathname }} />
    );
};

export default PrivateAdminRoute;