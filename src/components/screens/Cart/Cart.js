import {
    View,
    Text,
    StatusBar,
    FlatList,
} from "react-native"
import { cartStyle } from "./style"
import { AntDesign } from "@expo/vector-icons";
import Item from "./Item";
import Btn from "../../helper/Btn";
import { useContext } from "react";
import CartContext from "../../contexts/cart";
import { COLORS, FONTS } from "../../../constants/constants";

// I want to check types of navigation, If the cart screen is from the selected SourvinerView,
// show the header, else, don't show the header 
// If the click is from a tab Bar, then don't show the header.

export default function Cart({navigation, route}){
    let { cartCount, setCartCount, cartItems, setCartItems } = useContext(CartContext);
    const cart = cartItems;
    // console.log(cartCount)
    // console.log(cartItems)
    if(route.params){
        return(
            <View style={cartStyle.container}>
                <View style={cartStyle.header}>
                    <AntDesign name="left" style={cartStyle.backBtn} size={32} color="white" onPress={() => navigation.navigate('Dashboard')}/>
                    <Text style={cartStyle.textCart}>Cart</Text>
                </View>
                <View style={cartStyle.shopItems}>
                    <FlatList 
                        data={cartItems}
                        renderItem={({item}) => {
                            {console.log(item["name"])}
                           return  <Item 
                            cost={item["price"]}
                            url={item["image"]} />
                        }} />
                </View>
                <View style={cartStyle.footer}>
                    <Btn 
                    BtnStyle={cartStyle.orderBtn} 
                    Onpress={() => {
                        navigation.navigate('Payment')
                    }} 
                    BtnTextStyle={cartStyle.orderBtnText}
                    BtnText="Order" />
                </View>
                <StatusBar barStyle="light-content" />
            </View>
        )
    }else{
        return(
            <View style={cartStyle.container}>
                <View style={cartStyle.header}>
                    <Text style={{
                        width:'100%', 
                        textAlign:'center', 
                        color:COLORS.WHITE, 
                        fontSize:FONTS.SIZE.HEADING
                        }}>Cart</Text>
                </View>
                <View style={cartStyle.shopItems}>
                    {/* Write down the items  */}
                    {/* {console.log(cartItems)} */}
                    <FlatList 
                    data={cartItems}
                    renderItem={({item}) => {
                         // {console.log(item["name"])}
                         return <Item 
                         cost={item["price"]} 
                         url={item["image"]}
                         name={item.name}
                         />
                        }
                    } />
                </View>
                <View style={{
                    position:"absolute",
                    height:50,
                    width:'100%',
                    bottom:40,
                    left:50
                }}>
                    <Btn 
                        BtnStyle={cartStyle.orderBtn} 
                        Onpress={() => {
                           navigation.navigate('Payment')
                        }} 
                        BtnTextStyle={cartStyle.orderBtnText}
                        BtnText="Order" />
                </View>
                <StatusBar barStyle="light-content" />
            </View>
        )
    }
}