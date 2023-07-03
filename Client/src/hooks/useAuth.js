import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    const { token, setToken, permissions, setPermissions, isPasswordSet, setIsPasswordSet } = context;

    const setAuthToken = (newToken) => {
        window.sessionStorage.setItem('token', newToken);
        setToken(newToken);
    }

    const setAuthPermissions = (newRoles) => {
        window.sessionStorage.setItem('permissions', JSON.stringify(newRoles));
        setPermissions(newRoles);
    }

    const setAuthPasswordSet = (newIsPasswordSet) => {
        window.sessionStorage.setItem('isPasswordSet', newIsPasswordSet);
        setIsPasswordSet(newIsPasswordSet);
    }

    const logout = () => {
        window.sessionStorage.removeItem('token');
        window.sessionStorage.removeItem('permissions');
        window.sessionStorage.removeItem('isPasswordSet');
        setToken(null);
        setPermissions([]);
        setIsPasswordSet(false);
    }

    const isLoggedIn = () => {
        return token !== null;
    }

    return {
        token,
        setAuthToken,
        permissions,
        setAuthPermissions,
        logout,
        isLoggedIn,
        isPasswordSet,
        setAuthPasswordSet
    }
}