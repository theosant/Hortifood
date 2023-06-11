import { createContext } from 'react';

const AuthContext = createContext({
    token: null,
    setToken: () => {},
//     admin: null
//     setAdmin: () => {},
})

export default AuthContext;