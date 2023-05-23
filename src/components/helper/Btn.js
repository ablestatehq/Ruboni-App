import { TouchableOpacity,Text } from "react-native";

function Btn(props){
    return(
        <TouchableOpacity style={{...props.BtnStyle}} onPress={props.Onpress}>
            <Text style={{...props.BtnTextStyle}}>{props.BtnText}</Text>
        </TouchableOpacity>
    )
}

export default Btn;