import { NavigationContainer } from "@react-navigation/native";
import AppStact from "./Stack.Navigator";

function AuthStack(){
    // From this AuthStack Component, you have to check whether the user is signup or not 
    return(
        <NavigationContainer>
            <AppStact />
        </NavigationContainer>
    )
}

export default AuthStack;