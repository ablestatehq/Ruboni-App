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

const LoggedStack = createNativeStackNavigator();
const cartStack = createNativeStackNavigator();
const GuestStack = createNativeStackNavigator();

export function LoggedInStack(){
    return(
        <LoggedStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <LoggedInStack.Screen name="Home" component={TabStack} />
            <LoggedInStack.Screen name="Profile" component={Profile} />
            <LoggedInStack.Screen name="Accommodation" component={Accommodation} />
            <LoggedInStack.Screen name="ListAccommodation" component={ListAccommodation} />
            <LoggedInStack.Screen name="ListActivities" component={ListActivities} />
            <LoggedInStack.Screen name="Payment" component={Payment} />
            <LoggedInStack.Screen name="SourvinerView" component={SourvinerView} />
            <LoggedInStack.Screen name="MakeReservation" component={MakeReservation} />
            <LoggedInStack.Screen name="ViewPackage" component={ViewTourPackage} />
            <LoggedInStack.Screen name="Cart" component={Cart} />
            <LoggedInStack.Screen name="Notification" component={Notification} />
            <LoggedInStack.Screen name="PaymentMethod" component={PaymentMethod} />
            <LoggedInStack.Screen name="Settings" component={Settings} />
            <LoggedInStack.Screen name="Memory" component={Memory} />
            <LoggedInStack.Screen name="Itinerary" component={Itinerary} />
            <LoggedInStack.Screen name="TripCreation" component={TripCreation} />
        </LoggedStack.Navigator>
    )
}

export function CartStack(){
    return (
        <cartStack.Navigator screenOptions={{
            headerShown:false
        }}>
            <cartStack.Screen name="Cart" component={Cart}/>
            <cartStack.Screen name="Payment" component={Payment} />
        </cartStack.Navigator>
    )
}

export const GuestUserStack = () => {
    return(
        <GuestStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <GuestStack.Screen name="Home" component={TabStack} />
            <GuestStack.Screen name="Login" component={Login} />
            <GuestStack.Screen name="SignUp" component={SignUp} />
            <GuestStack.Screen name="Profile" component={Profile} />
            <GuestStack.Screen name="Accommodation" component={Accommodation} />
            <GuestStack.Screen name="ListAccommodation" component={ListAccommodation} />
            <GuestStack.Screen name="ListActivities" component={ListActivities} />
            <GuestStack.Screen name="Payment" component={Payment} />
            <GuestStack.Screen name="SourvinerView" component={SourvinerView} />
            <GuestStack.Screen name="MakeReservation" component={MakeReservation} />
            <GuestStack.Screen name="ViewPackage" component={ViewTourPackage} />
            <GuestStack.Screen name="Cart" component={Cart} />
            <GuestStack.Screen name="Notification" component={Notification} />
            <GuestStack.Screen name="PaymentMethod" component={PaymentMethod} />
            <GuestStack.Screen name="Settings" component={Settings} />
            <GuestStack.Screen name="Memory" component={Memory} />
            <GuestStack.Screen name="Itinerary" component={Itinerary} />
            <GuestStack.Screen name="TripCreation" component={TripCreation} />
        </GuestStack.Navigator>
    )
}