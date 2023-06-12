import React, { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState();
    
    return (
        <AuthContext.Provider
            value={{
                token,
                setToken,
                user,
                setUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}