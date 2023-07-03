import { useEffect } from 'react';
import { createContext, useState } from 'react';
import axios from "../utils/axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => {
        return window.sessionStorage.getItem('token') || null;
    });

    const [permissions, setPermissions] = useState(() => {
        return JSON.parse(window.sessionStorage.getItem('permissions')) || [];
    });

    const [isPasswordSet, setIsPasswordSet] = useState(() => {
        return JSON.parse(window.sessionStorage.getItem('isPasswordSet')) || false;
    });

    return (
        <AuthContext.Provider value={{ token, setToken, permissions, setPermissions, isPasswordSet, setIsPasswordSet }}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthProvider;