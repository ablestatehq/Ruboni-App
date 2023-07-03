import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    const [ token, setToken ] = useState(null);
    
    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            isLoading, 
            setIsLoading,
            token,
            setToken
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
export { AuthProvider };