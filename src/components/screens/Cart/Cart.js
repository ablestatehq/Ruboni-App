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
import { totalCost } from "../../../utils/cartFunctions";

export default function Cart({navigation}){
    let {  cartItems } = useContext(CartContext);
    
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
                                navigation.navigate('Payment',{
                                    screenName: 'Cart',
                                });
                            }else{
                                alert("go shopping")
                                navigation.navigate('Dashboard')
                            }
                        }} 
                        BtnTextStyle={cartStyle.orderBtnText}
                        BtnText="Order" />
                </View>
                <StatusBar barStyle="light-content" />
            </View>
        )
}