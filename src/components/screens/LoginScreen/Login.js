import { Text,
         View,
         TextInput,
         StatusBar,
         TouchableOpacity
} from "react-native"

import { LoginStyle } from "./style"
import { COLORS } from "../../contants/contants"
import { AntDesign } from "@expo/vector-icons"

export default function Login(){
    return(
        <View style={LoginStyle.container}>
            <View style={LoginStyle.header}>
                <AntDesign name="left" size={24} color="white" style={LoginStyle.leftBtn} 
                            onPress={() => alert("Going back to the dashboard")}
                            />
                <Text style={LoginStyle.loginText}>Welcome to Ruboni</Text>
            </View>
            <View style={LoginStyle.formView}>
                <Text style={LoginStyle.loginHeader}>Login</Text>
                <View style={LoginStyle.logoView}>
                    {/* I should place a logo for Ruboni here  */}
                </View>
                <View style={LoginStyle.loginDetails}>
                    <TextInput style={LoginStyle.inputField} placeholderTextColor={COLORS.PRIMARY} placeholder="Phonenumber"></TextInput>
                    <TextInput style={LoginStyle.inputField} placeholderTextColor={COLORS.PRIMARY} placeholder="Password"></TextInput>

                    <TouchableOpacity style={LoginStyle.loginBtn}>
                        <Text style={LoginStyle.login}>Login</Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={LoginStyle.forgot}>Forgot Password</Text>
                    </View>
                    <View style={LoginStyle.noAccountSection}>
                        <Text style={LoginStyle.noAccount}>Don't have an account? </Text>
                        <Text style={LoginStyle.signUp}>SignUp</Text>
                    </View>
                </View>
            </View>
            <StatusBar style="auto"/>
        </View>
    )
}
