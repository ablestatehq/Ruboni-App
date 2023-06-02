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

const Item = ({cost, url,name}) =>{
    const { cartCount, setCartCount, cartItems, setCartItems} = useContext(CartContext);
    const [count, setCount] = useState(1);
    return (
        <View style={cartStyle.itemView}>
            <Image source={url} style={cartStyle.itemImg}/>
            <View style={cartStyle.leftSide}>
                <View style={cartStyle.increase}>
                    <AntDesign name="plus" size={24} color={COLORS.PRIMARY_1} onPress={() => {
                        let value = count + 1;
                        setCount(value);
                    }}/>
                    <Text>{count}</Text>
                    <AntDesign name="minus" size={24} color={COLORS.PRIMARY_1} onPress={() => {
                        if(count < 2){
                            alert('One can\'t be reduced, you can decide to remove the item if you don\'t wnt it.')
                        }else{
                            let val = count - 1;
                            setCount(val);
                        }
                    }}/>
                </View>
                <View>
                    <Text>{`$${Number(cost.slice(1)) * count}`}</Text>
                </View>
                <Btn BtnText="remove" BtnStyle={cartStyle.btn} Onpress={() => {
                    // Remove the item from the cartItems,
                    const arr = [...cartItems];
                    let index;
                    for(const obj of arr){
                        if(Object.keys(obj).find(el => obj[el] === name)){
                            index = arr.indexOf(obj);
                            break;
                        }
                    }

                    arr.splice(index,1)
                    
                    setCartItems(arr);

                    // Reduce count of the item.
                    let valCount = cartCount - 1;
                    setCartCount(valCount);

                }} 
                BtnTextStyle={cartStyle.btnText} />
            </View>
        </View>
    )
}

export default Item;