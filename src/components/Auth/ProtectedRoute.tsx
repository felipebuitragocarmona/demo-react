import { Navigate, Outlet } from "react-router-dom";

// Función para verificar si el usuario está autenticado
const isAuthenticated = () => {
    const user = localStorage.getItem("user");
    return user ? true : false;
};

// Componente de Ruta Protegida
const ProtectedRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/auth/signin" replace />;
};

export default ProtectedRoute;
