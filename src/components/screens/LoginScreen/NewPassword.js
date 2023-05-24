import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Btn from "../../helper/Btn";

export default function Reset() {
    return(
        <View>
            <TextInput placeholder="New password"/>
            <TextInput placeholder="Confirm password"/>
            <Btn BtnText="Reset" BtnStyle={style} />
        </View>
    )
}