import { Text, TextInput, View } from "react-native"
import Btn from "../../helper/Btn";
import { AntDesign } from "@expo/vector-icons";

const Forgot = () => {
    return(
        <View>
            <View>
                <AntDesign name="left" color="white" size={32} />
                <Text>Request Password Reset Code</Text>
            </View>
            <View>
                <Text>Forgot Password?</Text>
                <Text>No worries, you will be able reset</Text>
                <TextInput />
                <Btn BtnText="Request" />
                <Btn BtnText="Back to Login" />
            </View>
        </View>
    )
}

export default Forgot;