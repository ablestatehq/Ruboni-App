import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Cart, Memory, Payment, PaymentMethod, Profile, Settings } from "../components/screens";

const ProfStack = createNativeStackNavigator();

export function ProfileStack(){
    return(
        <ProfStack.Navigator>
            <ProfStack.Screen name="Profile" component={Profile} options={{
                headerShown:false,
            }} />
            <ProfStack.Screen name="Memories" component={Memory} options={{
                headerShown:false,
            }} />
            <ProfStack.Screen name="PaymentMethod" component={PaymentMethod} options={{
                headerShown:false
            }} />
            <ProfStack.Screen name="Settings" component={Settings} options={{
                headerShown:false
            }} />
        </ProfStack.Navigator>
    )
}

const cartStack = createNativeStackNavigator();
export function CartStack(){
    return (
        <cartStack.Navigator>
            <cartStack.Screen name="Cart" component={Cart} options={{
                headerShown:false
            }}/>
            <cartStack.Screen name="Payment" component={Payment} />
        </cartStack.Navigator>
    )
}