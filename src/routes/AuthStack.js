import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import appwriteContext from "../components/contexts/appwriteContext";
import { GuestUserStack, LoggedInStack } from "./routes";

function AuthStack(){
    // From this AuthStack Component, you have to check whether the user is signup or not 
    const { isLoggedIn } = useContext(appwriteContext);
    return(
        <NavigationContainer>
            {/* {console.log(isLoggedIn)} */}
            {isLoggedIn ? <LoggedInStack /> : <GuestUserStack/>}
        </NavigationContainer>
    )
}

export default AuthStack;