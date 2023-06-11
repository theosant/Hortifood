import React, { useState } from 'react';
import Context from './Context';

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('token');
    
    return (
        <Context.Provider
            value={{
                token,
                setToken
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default AuthProvider;