import { Text,
    View,
    TextInput,
    StatusBar,
} from "react-native"

import { SignUpStyle } from "./style"
import { COLORS } from "../../contants/contants"
import { TouchableOpacity } from "react-native"

export default function SignUp() {
    return(
        <View style={SignUpStyle.container}>
            <View style={SignUpStyle.header}>
                <Text style={SignUpStyle.signText}>Register with Us</Text>
            </View>
            <View style={SignUpStyle.formView}>
                <Text style={SignUpStyle.signHeader}>Register</Text>
                {/* <View style={SignUpStyle.logoView}>
                    I should place a logo for Ruboni here 
                </View> */}
                <TextInput style={SignUpStyle.inputField} placeholderTextColor={COLORS.PRIMARY} placeholder=""></TextInput>
                <TextInput style={SignUpStyle.inputField} placeholderTextColor={COLORS.PRIMARY} placeholder=""></TextInput>
                <TextInput style={SignUpStyle.inputField} placeholderTextColor={COLORS.PRIMARY} placeholder=""></TextInput>
                <TextInput style={SignUpStyle.inputField} placeholderTextColor={COLORS.PRIMARY} placeholder=""></TextInput>
                <TextInput style={SignUpStyle.inputField} placeholderTextColor={COLORS.PRIMARY} placeholder=""></TextInput>

                <TouchableOpacity style={SignUpStyle.signBtn}>
                    <Text style={SignUpStyle.sign}>Sign Up</Text>
                </TouchableOpacity>
                {/* <View>
                    <Text style={SignUpStyle.forgot}>Forgot Password</Text>
                </View> */}
                <View style={SignUpStyle.yesAccountSection}>
                    <Text style={SignUpStyle.yesAccount}>If you already have an account?</Text>
                    <Text style={SignUpStyle.signUp}> Login</Text>
                </View>
            </View>
            <StatusBar style="auto"/>
        </View>
    )
}