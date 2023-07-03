import { TouchableOpacity,Text } from "react-native";

function Btn({BtnStyle, Onpress, BtnTextStyle, BtnText, isDisable = false}){
    return(
        <TouchableOpacity style={{...BtnStyle}} onPress={Onpress} disabled={isDisable}>
            <Text style={{...BtnTextStyle}}>{BtnText}</Text>
        </TouchableOpacity>
    )
}

export default Btn;