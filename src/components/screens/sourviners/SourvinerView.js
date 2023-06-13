import { AntDesign } from "@expo/vector-icons";
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
} from 'react-native';
import Btn from "../../helper/Btn";
import { sourvinerStyles } from "./style";
import { COLORS } from "../../../constants/constants";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../contexts/cart";
import Dialog from "../../helper/dialog";
import { getLocalCart, localCart } from "../../../utils/cartFunctions";

export default function SourvinerView({navigation, route}){
    const { name, image, price } = route.params;
    const { cartCount, setCartCount, cartItems, setCartItems } = useContext(CartContext);
    const [ isVisible, setIsVisible] = useState(false);

    const _handleVisibility = () => {
        setIsVisible(!isVisible);
    }
    const _itemInCart = (id)=>{
        for(const obj of cartItems){
            if(Object.keys(obj).find(ele => obj[ele] === id)){
                return true
            }
        }
        return false
    };

    return(
        <View style={sourvinerStyles.sContainer}>
            <View style={sourvinerStyles.header}>
               <ImageBackground source={image} resizeMode="contain" style={sourvinerStyles.bkheader}>
                     {/* This section should have a background image. that is responsive  */}
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <AntDesign name="left" size={32} color={COLORS.PRIMARY} style={sourvinerStyles.backBtn} onPress={() => {
                            navigation.navigate('Dashboard')
                        }}/>
                        <Text style={{fontSize:25, color:COLORS.WHITE, textAlign:'center'}}>{name}</Text>
                    </View>
               </ImageBackground>
            </View>
            <View style={sourvinerStyles.zindexView}>
                    <View style={sourvinerStyles.sdetail}>
                        <Text>
                            Detailed description of the sourviner
                        </Text>
                    </View>
                    <View style={sourvinerStyles.sBuy}>
                        <Text style={{padding:3, color:COLORS.PRIMARY}}>{price}</Text>
                        <Btn BtnStyle={sourvinerStyles.buyBtn} 
                        Onpress={()=>{
                            // send the image to the cart
                            // then update the cartCount
                           if(_itemInCart(name)){
                            alert('Item already in cart')
                           }else{
                                // console.log(cartCount)
                                const newItems = [...cartItems, {
                                    "name":name,
                                    "image": image,
                                    "Qty": 1,
                                    "price": price
                                }]

                                // Store the new items to local storage
                                localCart(newItems);
                                
                                // save change the cartItems
                                setCartItems(newItems);
                                <Dialog isV={isVisible} title="Added to Cart" message={`${name} has been added to cart`} yesPressed={_handleVisibility} />
                                navigation.navigate('Dashboard');
                                // navigation.navigate('Cart',{
                                //     screen_name: 'SourvinerView'
                                // });
                           }
                            // console.log(cartItems);
                        }}
                        BtnTextStyle={sourvinerStyles.btnText}
                        BtnText="Add to cart"/>
                    </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}