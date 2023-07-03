import { createContext, useState } from "react";
import  AppwriteService    from "../../appwrite/service";

export default AppwriteContext = createContext({
    appwrite: new AppwriteService(),
    isLoggedIn: false,
    setIsLoggedIn: ()=>{},
    isLoading: false,
    setIsLoading: () => {},
    user: null,
    setUser: () => {},
    token: null,
    setToken: () => {},
    profile: null,
    setProfile: () => {}
});

export const AppwriteProvider = ({children}) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ user, setUser ] = useState({});
    const [ token, setToken ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);
    const [ profile, setProfile ] = useState(null)

    const defaultValue = {
        appwrite: new AppwriteService(),
        isLoggedIn,
        setIsLoggedIn,
        isLoading, 
        setIsLoading,
        user,
        setUser,
        token,
        setToken,
        profile,
        setProfile
        }
    return(
        <AppwriteContext.Provider value={defaultValue}>
            {children}
        </AppwriteContext.Provider>
    )
}