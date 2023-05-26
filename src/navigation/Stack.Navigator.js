import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Accommodation, Cart, Dashboard, ListAccommodation, ListActivities, Login, MakeReservation, Memory, Notification, Payment, PaymentMethod, Settings, SignUp, SourvinerView, ViewTourPackage } from "../components/screens";
import TabStack from "./Tab.Navigator";

const Stack = createNativeStackNavigator();

export default function AppStact() {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={TabStack} options={{
                headerShown:false,
                }}/>
            <Stack.Screen name="Login" component={Login} options={{
                headerShown:false,
            }}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{
                headerShown:false,
                }}/>
            <Stack.Screen name="Accommodation" component={Accommodation} options={{
                headerShown:false,
            }}/>
            <Stack.Screen name="ListAccommodation" component={ListAccommodation} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="ListActivities" component={ListActivities} options={{
                headerShown:false,
            }} />
            <Stack.Screen name="Payment" component={Payment} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="SourvinerView" component={SourvinerView} options={{
                headerShown:false,
            }}/>
            <Stack.Screen name="MakeReservation" component={MakeReservation} options={{
                headerShown:false,
            }} />
            <Stack.Screen name="ViewPackage" component={ViewTourPackage} options={{
                headerShown:false,
            }}/>
            <Stack.Screen name="Cart" component={Cart} options={{
                headerShown: false,
            }}/>
            {/* Screens in the profile section  */}
            <Stack.Screen name="Memories" component={Memory} />
            {/* <Stack.Screen name="Notification" component={Notification} /> */}
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        </Stack.Navigator>
    )
}