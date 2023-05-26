import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { Cart, Dashboard, Notification, Profile } from '../components/screens';
import { COLORS } from '../components/contants/contants';

const Tab = createBottomTabNavigator()

export default function TabStack(){
    return(
       <Tab.Navigator screenOptions={({route})=>({
        tabBarIcon:({focused, color, size})=>{
            // let iconName;
            if(route.name === 'Dashboard'){
                return focused ? <Ionicons name='home' color={color} size={size} /> : <Ionicons name='home-outline' color={color} size={size} /> 
                // iconName = focused ? 'home' : 'home-outline'
            }else if(route.name === 'Notification'){
                return focused ? <Ionicons name='notifications' color={color} size={size} /> : <Ionicons name='notifications-outline' color={color} size={size} /> 
            }else if(route.name === 'Cart'){
                return focused ? <Ionicons name='cart' color={color} size={size} /> : <Ionicons name='cart-outline' color={color} size={size} /> 
            }else if(route.name === 'Account'){
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
            <Tab.Screen name="Notification" component={Notification} options={{tabBarBadge: 0}}/>
            <Tab.Screen name='Cart' component={Cart} options={{tabBarBadge: 0}}/>
            <Tab.Screen name='Account' component={Profile}/>
       </Tab.Navigator>
    )
}