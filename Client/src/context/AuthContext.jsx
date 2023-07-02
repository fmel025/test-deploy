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

    const [isPasswordSet, setIsPasswordSet] = useState(false);

    useEffect(() => {
        if (token) {
            axios.get('/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                window.sessionStorage.setItem('permissions', JSON.stringify(response.data.permissions));
                setPermissions(response.data.permissions);
                setIsPasswordSet(response.data.isPasswordSet);
            }).catch((error) => {
                console.log(error);
            });
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken, permissions, setPermissions, isPasswordSet, setIsPasswordSet }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;