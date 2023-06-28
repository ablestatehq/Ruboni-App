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
import { useContext, useState } from "react";
import CartContext from "../../contexts/cart";
import { COLORS, FONTS } from "../../../constants/constants";
import { totalCost } from "../../../utils/cartFunctions";
import appwriteContext from "../../contexts/appwriteContext";
import Dialog from "../../helper/dialog";

export default function Cart({navigation}){
    let {  cartItems } = useContext(CartContext);
    const { isLoggedIn } = useContext(appwriteContext)
    const [ isVisible, setIsVisible ] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }
        return(
            <View style={cartStyle.container}>
                <View style={cartStyle.header}>
                <AntDesign name="left" style={cartStyle.backBtn} size={32} color="white" onPress={() => navigation.navigate('Dashboard')}/>
                    <Text style={{
                        width:'100%', 
                        textAlign:'center', 
                        color:COLORS.WHITE, 
                        fontSize:FONTS.SIZE.HEADING
                        }}>Cart</Text>
                </View>
                <View style={cartStyle.shopItems}>
                    <FlatList 
                        data={cartItems}
                        renderItem={({item}) => {
                            return <Item 
                            cost={item["price"]} 
                            url={item["image"]}
                            name={item.name}
                            />
                            }
                        } />
                {/* Write down the items  */}
                </View>
                <View style={{
                    position:"absolute",
                    height:50,
                    width:'100%',
                    bottom:40,
                    padding:10
                }}>
                    <Btn 
                        BtnStyle={{...cartStyle.orderBtn, width:'100%'}} 
                        Onpress={() => {
                            if(totalCost([...cartItems])){
                              if(isLoggedIn){
                                navigation.navigate('Payment',{
                                    screenName: 'Cart',
                                });
                              }else{
                                toggleVisibility()
                              }
                            }else{
                                alert("go shopping")
                                navigation.navigate('Dashboard')
                            }
                        }} 
                        BtnTextStyle={cartStyle.orderBtnText}
                        BtnText="Order" />
                        <Dialog
                            isV={isVisible}
                            title="No account found"
                            message="Do you want to create a account?"
                            yesPressed={() => {
                                toggleVisibility()
                                navigation.navigate('Login');
                            }}
                            noPressed={() => {
                                toggleVisibility()
                            }} />
                </View>
                <StatusBar barStyle="light-content" />
            </View>
        )
}