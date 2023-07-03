import ClientNavbar from "./ImprovedNavbar";
import EmployeeNavbar from "./EmployeeNavbar";

import { useAuth } from "../../../hooks/useAuth";

export const GlobalNavbar = () => {
    const { isLoggedIn, permissions, token, logout } = useAuth();
    
    return (
        <>
        {isLoggedIn() && permissions.includes("WORKER") ? (
            <EmployeeNavbar />
        ) : (
            <ClientNavbar />
        )}
        </>
    );
    }