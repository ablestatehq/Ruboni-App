import { TextInput, View } from "react-native";
import Btn from "../../helper/Btn";

function Otp(){
    return(
        // Enter the Otp here
        <View>
            <TextInput placeholder="Enter OTP here" placeholderTextColor='blue'/>
            <Btn />
        </View>        
    )
}