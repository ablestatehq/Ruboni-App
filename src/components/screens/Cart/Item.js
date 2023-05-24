import { AntDesign } from "@expo/vector-icons";
import {
    View,
    Text,
    Image
} from "react-native";
import { COLORS } from "../../contants/contants";
import { useState } from "react";
import Btn from "../../helper/Btn";

const Item = (props) =>{
    const [count, setCount] = useState(0);
    const cost = props.cost;
    return (
        <View style={styles.itemView}>
            <Image source={props.url} />
            <View>
                <View style={styles.increase}>
                    <AntDesign name="plus" size={10} color={COLORS.PRIMARY_1} onPress={() => setCount(count++)}/>
                    <Text>{count}</Text>
                    <AntDesign name="minus" size={10} color={COLORS.PRIMARY_1} onPress={() => setCount(count--)}/>
                </View>
                <View>
                    <Text>{`$${cost * count}`}</Text>
                </View>
                <Btn BtnText="remove" BtnStyle={styles.btn} Onpress={() => alert('it works')} BtnTextStyle={styles.btnText} />
            </View>
        </View>
    )
}

export default Item;