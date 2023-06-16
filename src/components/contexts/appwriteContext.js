import { createContext, useState } from "react";
import  AppwriteService    from "../../appwrite/service";

export default AppwriteContext = createContext({
    appwrite: new AppwriteService(),
    isLoggedIn: false,
    setIsLoggedIn: ()=>{}
});

export const AppwriteProvider = ({children}) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const defaultValue = {
        appwrite: new AppwriteService(),
        isLoggedIn,
        setIsLoggedIn
        }
    return(
        <AppwriteContext.Provider value={defaultValue}>
            {children}
        </AppwriteContext.Provider>
    )
}