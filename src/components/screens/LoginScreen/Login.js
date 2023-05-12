import { Text,
         View,
         TextInput,
         StatusBar,
} from "react-native"

import { style } from "./style"
import { COLORS } from "../../contants/contants"
import { AntDesign } from "@expo/vector-icons"

export function Login(){
    return(
        <View style={style.container}>
            <View style={style.header}>
                <AntDesign name="left" size={24} color="white" style={style.leftBtn} 
                            onPress={() => {
                                props.navigation.navigate('Home');
                            }}
                            />
                <Text style={style.loginText}>Welcome to Ruboni</Text>
            </View>
            <View style={style.formView}>
                <Text style={style.loginHeader}>Login</Text>
                <View style={style.logoView}>
                    {/* I should place a logo for Ruboni here  */}
                </View>
                <TextInput style={style.inputField} placeholderTextColor={COLORS.PRIMARY} placeholder=""></TextInput>
                <TextInput style={style.inputField} placeholderTextColor={COLORS.PRIMARY} placeholder=""></TextInput>

                <Touchable style={style.loginBtn}>
                    <Text style={style.login}>Login</Text>
                </Touchable>
                <View>
                    <Text style={style.forgot}>Forgot Password</Text>
                </View>
                <View style={style.noAccountSection}>
                    <Text style={style.noAccount}>Don't have an account? </Text>
                    <Text style={style.signUp}>SignUp</Text>
                </View>
            </View>
            <StatusBar style="auto"/>
        </View>
    )
}
