import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Cart, Dashboard, Itinerary, Map, Profile } from '../components/screens';
import { COLORS } from '../constants/constants';
import { useContext } from 'react';
import CartContext from '../components/contexts/cart';
import appwriteContext from '../components/contexts/appwriteContext';

const Tab = createBottomTabNavigator()

export default function TabStack(){
    const { cartItems } = useContext(CartContext);
    const { isLoggedIn, user } = useContext(appwriteContext);
    return(
       <Tab.Navigator screenOptions={({route})=>({
        tabBarIcon:({focused, color, size})=>{
            // let iconName;
            if(route.name === 'Dashboard'){
                return focused ? <Ionicons name='home' color={color} size={size} /> : <Ionicons name='home-outline' color={color} size={size} /> 
                // iconName = focused ? 'home' : 'home-outline'
            }else if(route.name === 'Map') {
                return focused ? <MaterialCommunityIcons name="map-marker" size={size} color={color} /> : <MaterialCommunityIcons name="map-marker-outline" size={size} color={color} />
            }else if(route.name === 'Itinerary'){
                // return focused ? <Ionicons name='route' color={color} size={size} /> : <Ionicons name='notifications-outline' color={color} size={size} /> 
                return <FontAwesome5 name="route" size={size} color={color} />
            }else if(route.name === 'CartTab'){
                return focused ? <Ionicons name='cart' color={color} size={size} /> : <Ionicons name='cart-outline' color={color} size={size} /> 
            }else if(route.name === 'Guest' || route.name === user.firstName){
                return focused ? <MaterialCommunityIcons name='account' color={color} size={size} /> : <MaterialCommunityIcons name='account-outline' color={color} size={size} />
            }
        },
        tabBarStyle:{position: 'absolute'},
        tabBarHideOnKeyboard:true,
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.BLACK,
        headerShown:false,
       })}>
            <Tab.Screen name='Dashboard' component={Dashboard}/>
            <Tab.Screen name='Map' component={Map} />
            <Tab.Screen name="Itinerary" component={Itinerary} options={{tabBarBadge: 0}}/>
            <Tab.Screen name='CartTab' component={Cart} options={{tabBarBadge: cartItems.length}}/>
            <Tab.Screen name={isLoggedIn ? user.firstName : "Guest"} component={Profile}/>
       </Tab.Navigator>
    )
}