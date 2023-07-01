import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    const { token, setToken, permissions, setPermissions } = context;

    const setAuthToken = (newToken) => {
        window.sessionStorage.setItem('token', newToken);
        setToken(newToken);
    }

    const setAuthRoles = (newRoles) => {
        setPermissions(newRoles);
    }

    const logout = () => {
        window.sessionStorage.removeItem('token');
        setToken(null);
        setPermissions([]);
    }

    const isLoggedIn = () => {
        return token !== null;
    }

    return {
        token,
        setAuthToken,
        permissions,
        setAuthRoles,
        logout,
        isLoggedIn,
    }
}