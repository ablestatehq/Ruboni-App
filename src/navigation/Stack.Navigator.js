import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Accommodation, Cart, Dashboard, ListAccommodation, ListActivities, Login, MakeReservation, Memory, Notification, Payment, PaymentMethod, Settings, SignUp, SourvinerView, ViewTourPackage } from "../components/screens";
import TabStack from "./Tab.Navigator";

const Stack = createNativeStackNavigator();

export default function AppStact() {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={TabStack}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="Accommodation" component={Accommodation}/>
            <Stack.Screen name="ListAccommodation" component={ListAccommodation}/>
            <Stack.Screen name="ListActivities" component={ListActivities} />
            <Stack.Screen name="Payment" component={Payment}/>
            <Stack.Screen name="SourvinerView" component={SourvinerView}/>
            <Stack.Screen name="MakeReservation" component={MakeReservation} />
            <Stack.Screen name="ViewPackage" component={ViewTourPackage}/>
            <Stack.Screen name="Cart" component={Cart} />
            {/* Screens in the profile section  */}
            <Stack.Screen name="Memories" component={Memory} />
            {/* <Stack.Screen name="Notification" component={Notification} /> */}
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        </Stack.Navigator>
    )
}