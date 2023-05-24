import {
    View,
    Text,
    StatusBar,
    FlatList,
} from "react-native"
import { cart } from "./style"
import { AntDesign } from "@expo/vector-icons";
import Item from "./Item";
import Btn from "../../helper/Btn";

// I want to types of navigation, If the cart screen is from the selected SourvinerView,
// show the header, else, don't show the header 
// If the click is from a tab Bar, then don't show the header.
export default function Cart(){
    const data = [
        {
            "image":"../rendlsfalfs/lakf"
        }
    ]
    return(
        <View>
            <View style={cart.header}>
                <AntDesign name="left" size={32} color="white" />
                <Text>Cart</Text>
            </View>
            <View>
                {/* Write down the items  */}
                <FlatList
                    data={data}
                    renderItem={({item}) => {
                        // Give the item it's props.
                        <Item />
                    }}
                    showsVerticalScrollIndicator={false} />
            </View>
            <Btn 
            BtnStyle={cart.orderBtn} 
            Onpress={() => alert('Go to making payments screen')} 
            BtnTextStyle={cart.orderBtnText}
            BtnText="Order" />
            <StatusBar style="auto" />
        </View>
    )
}