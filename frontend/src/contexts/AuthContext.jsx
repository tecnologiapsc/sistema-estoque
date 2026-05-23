import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token) {
            setAuthenticated(true);
        }

    }, []);

    function login(token) {

        localStorage.getItem("token", token);

        setAuthenticated(true);

    }

    function logout() {

        localStorage.removeItem("token");

        setAuthenticated(false);

    }

    return (

        <AuthContext.Provider
            value={{
                authenticated,
                login, 
                logout
            }}        
        >

        </AuthContext.Provider>
    );
}