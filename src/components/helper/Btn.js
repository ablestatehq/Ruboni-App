import { TouchableOpacity,Text } from "react-native";

function Btn({BtnStyle, Onpress, BtnTextStyle, BtnText}){
    return(
        <TouchableOpacity style={{...BtnStyle}} onPress={Onpress}>
            <Text style={{...BtnTextStyle}}>{BtnText}</Text>
        </TouchableOpacity>
    )
}

export default Btn;