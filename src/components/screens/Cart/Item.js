import { AntDesign } from "@expo/vector-icons";
import {
    View,
    Text,
    Image
} from "react-native";
import { COLORS } from "../../../constants/constants";
import { useContext, useState } from "react";
import Btn from "../../helper/Btn";
import { cartStyle } from './style';
import CartContext from "../../contexts/cart";
import { clearStorage, localCart } from "../../../utils/cartFunctions";

const Item = ({cost, url,name}) =>{
    const { cartCount, setCartCount, cartItems, setCartItems} = useContext(CartContext);
    const [ isable, setIsable ] = useState(false)
    const [count, setCount] = useState(1);
    return (
        <View style={cartStyle.itemView}>
            <Image source={url} style={cartStyle.itemImg}/>
            <View style={cartStyle.leftSide}>
                <View style={cartStyle.increase}>
                    <AntDesign name="plus" size={24} color={COLORS.WHITE} style={{backgroundColor:COLORS.PRIMARY}} onPress={() => {
                        let value = count + 1;
                        setCount(value);
                        // Looking for the item in the cartItems and change it's quantity
                        const arr = [...cartItems];
                        for(const obj of arr){
                            if(Object.keys(obj).find(el => obj[el] === name)){
                                // index = arr.indexOf(obj);
                                obj['Qty'] = count;
                                break;
                            }
                        }

                        setCartItems(arr);
                        localCart(arr);
                    }}/>
                    <Text style={{width:40, textAlign:"center"}}>{count}</Text>
                    <AntDesign name="minus" disabled={isable} size={24} color={COLORS.WHITE} style={{backgroundColor:COLORS.PRIMARY}} onPress={() => {
                        if(count < 2){
                            // alert('One can\'t be reduced, you can decide to remove the item if you don\'t wnt it.')
                            setIsable(true);
                        }else{
                            let val = count - 1;
                            setCount(val);
                             // Looking for the item in the cartItems and change it's quantity
                            const arr = [...cartItems];
                            for(const obj of arr){
                                if(Object.keys(obj).find(el => obj[el] === name)){
                                    obj['Qty'] = count;
                                    break;
                                }
                            }

                        setCartItems(arr);
                        localCart(arr);
                        }
                    }}/>
                </View>
                <View>
                    <Text>T.Cost: {`$${Number(cost.slice(1)) * count}`}</Text>
                </View>
                <Btn BtnText="Remove" BtnStyle={cartStyle.btn} Onpress={() => {
                    // Remove the item from the cartItems,
                    const arr = [...cartItems];
                    let index;
                    for(const obj of arr){
                        if(Object.keys(obj).find(el => obj[el] === name)){
                            index = arr.indexOf(obj);
                            break;
                        }
                    }

                    arr.splice(index,1);
                    setCartItems(arr);
                    if(arr.length === 0){
                        clearStorage("cartItemList");
                    }else{
                        localCart(arr);
                    }

                }} 
                BtnTextStyle={cartStyle.btnText} />
            </View>
        </View>
    )
}

export default Item;