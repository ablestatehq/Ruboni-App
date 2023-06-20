import { Text,
         View,
         TextInput,
         StatusBar,
         TouchableOpacity
} from "react-native"

import { LoginStyle } from "./style"
import { COLORS } from "../../../constants/constants"
import { AntDesign } from "@expo/vector-icons"
import { Formik } from "formik"
import * as yup from 'yup';

export default function Login({navigation}){
    
    return(
        <View style={LoginStyle.container}>
            <View style={LoginStyle.header}>
                <AntDesign name="left" size={24} color="white" style={LoginStyle.leftBtn} 
                            onPress={() => navigation.navigate('Home')}
                            />
                <Text style={LoginStyle.loginText}>Welcome to Ruboni</Text>
            </View>
            <View style={LoginStyle.formView}>
                <Text style={LoginStyle.loginHeader}>Login</Text>
                <View style={LoginStyle.logoView}>
                    {/* I should place a logo for Ruboni here  */}
                </View>
                <View style={LoginStyle.loginDetails}>
                    <Formik 
                        initialValues={{email: "", password: "",}}
                        onSubmit={values => console.log(values)}
                        validationSchema={yup.object().shape({
                            email: yup
                            .string()
                            .email()
                            .required(),
                            password: yup
                            .string()
                            .min(4, "Password should not be less than 4")
                            .max(10, "Password should not exceed 10 characters")
                            .required()
                        })}
                        >
                            
                        {({
                            values,
                            errors,
                            touched,
                            isValid,
                            setFieldTouched,
                            handleChange, 
                            handleSubmit 
                        }) => 
                            <View style={LoginStyle.formContainer}>
                                <TextInput 
                                    style={LoginStyle.inputField} 
                                    placeholderTextColor={COLORS.PRIMARY} 
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    onChangeText={handleChange('email')}
                                    onBlur={() => setFieldTouched('email')}
                                    value={values.email}
                                 />
                                 {touched.email && errors.email && <Text style={{fontSize:12, color:COLORS.RED, margin:0}}>{errors.email}</Text>}
                                <TextInput 
                                    style={LoginStyle.inputField} 
                                    placeholderTextColor={COLORS.PRIMARY} 
                                    placeholder="Password" 
                                    secureTextEntry
                                    onChangeText={handleChange('password')}
                                    onBlur={()=>setFieldTouched('password')}
                                    value={values.password}
                                />
                                {touched.password && errors.password && <Text style={{fontSize:12, color:COLORS.RED, margin:0}}>{errors.password}</Text>}

                                <TouchableOpacity style={LoginStyle.loginBtn} onPress={handleSubmit} disabled={!isValid}>
                                    <Text style={LoginStyle.login}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </Formik>
                    <View>
                        <TouchableOpacity onPress={()=> alert("reset password")}>
                            <Text style={LoginStyle.forgot}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={LoginStyle.noAccountSection}>
                        <Text style={LoginStyle.noAccount}>Don't have an account? </Text>
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate('SignUp');
                        }}>
                            <Text style={LoginStyle.signUp}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <StatusBar style="auto"/>
        </View>
    )
}
