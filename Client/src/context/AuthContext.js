import { useEffect } from 'react';
import { createContext, useState } from 'react';
import axios from "../utils/axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(() => {
        return window.sessionStorage.getItem('token') || null;
    });

    const [permissions, setPermissions] = useState([]);

    // useEffect(() => {
    //     if (token) {
    //         axios.get('/user/me', {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         }).then((response) => {
    //             setPermissions(response.data.permissions);
    //         }
    //         ).catch((error) => {
    //             console.log(error);
    //         }
    //         );
    //     }
    // }, [token])

    return (
        <AuthContext.Provider value={{ token, setToken, permissions, setPermissions }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;