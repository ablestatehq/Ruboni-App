import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { 
    Accommodation, 
    Cart, Itinerary, 
    ListAccommodation, 
    ListActivities, 
    Login, MakeReservation, 
    Memory, Notification, 
    Payment, PaymentMethod, 
    Profile, Settings, SignUp, 
    SourvinerView, TripCreation, ViewTourPackage
 } from "../components/screens";
import TabStack from "./Tab.Navigator";

const Stack = createNativeStackNavigator();
// const Stack = createNativeStackNavigator();
// const Stack = createNativeStackNavigator();

export function LoggedInStack(){
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={TabStack} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Accommodation" component={Accommodation} />
            <Stack.Screen name="ListAccommodation" component={ListAccommodation} />
            <Stack.Screen name="ListActivities" component={ListActivities} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="SourvinerView" component={SourvinerView} />
            <Stack.Screen name="MakeReservation" component={MakeReservation} />
            <Stack.Screen name="ViewPackage" component={ViewTourPackage} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Memory" component={Memory} />
            <Stack.Screen name="Itinerary" component={Itinerary} />
            <Stack.Screen name="TripCreation" component={TripCreation} />
        </Stack.Navigator>
    )
}

export function stack(){
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Cart" component={Cart}/>
            <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
    )
}

export const GuestUserStack = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={TabStack} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Accommodation" component={Accommodation} />
            <Stack.Screen name="ListAccommodation" component={ListAccommodation} />
            <Stack.Screen name="ListActivities" component={ListActivities} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="SourvinerView" component={SourvinerView} />
            <Stack.Screen name="MakeReservation" component={MakeReservation} />
            <Stack.Screen name="ViewPackage" component={ViewTourPackage} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Memory" component={Memory} />
            <Stack.Screen name="Itinerary" component={Itinerary} />
            <Stack.Screen name="TripCreation" component={TripCreation} />
        </Stack.Navigator>
    )
}