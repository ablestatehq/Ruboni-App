import { Text,
    View,
    TextInput,
    StatusBar,
} from "react-native"

import { SignUpStyle } from "./style"
import { COLORS } from "../../../constants/constants"
import { TouchableOpacity } from "react-native"
import { Formik } from "formik"
import * as yup from 'yup';
import { useContext } from "react"
import appwriteContext from "../../contexts/appwriteContext"

export default function SignUp({navigation}) {
    const { appwrite } = useContext(appwriteContext);

    return(
        <View style={SignUpStyle.container}>
            <View style={SignUpStyle.header}>
                <Text style={SignUpStyle.signText}>Register with Us</Text>
            </View>
            <Formik 
                initialValues={{name:"", email:"", password:"", phonenumber:"", confirmPassword:""}}
                onSubmit={values => console.log(values)}
                validationSchema={yup.object().shape({
                    name: yup
                    .string()
                    .required(),

                    email: yup
                    .string()
                    .email()
                    .required(),
                    
                    phonenumber: yup
                    .string()
                    .min(10, 'The shorted number is 10 digits')
                    .max(13, "The longest number should 13 digits")
                    .required(),

                    password: yup
                    .string()
                    .min(4, "The password should not be shorter than 4 characters")
                    .max(15, "The password should not be too long")
                    .required('password is required'),

                    confirmPassword: yup
                    .string()
                    .oneOf([yup.ref('password'), null])
                    .required('password confirm is required')
                })}
                >
                {({
                    values, 
                    errors,
                    isValid,
                    touched,
                    setFieldTouched,
                    handleChange, 
                    handleSubmit
                })=>
                    (
                        <View style={SignUpStyle.formView}>
                            <Text style={SignUpStyle.signHeader}>Register</Text>
                            <TextInput 
                            style={SignUpStyle.inputField} 
                            placeholderTextColor={COLORS.PRIMARY} 
                            onBlur={() => setFieldTouched('name')}
                            onChangeText={handleChange('name')}
                            value={values.name}
                            placeholder="Full name"/>

                            {touched.name && errors.name && <Text style={{fontSize:10, color:COLORS.RED, margin: 0}}>{errors.name}</Text>}
                            
                            <TextInput
                            style={SignUpStyle.inputField} 
                            placeholderTextColor={COLORS.PRIMARY} 
                            onBlur={() => setFieldTouched('email')}
                            onChangeText={handleChange('email')}
                            placeholder="Email"
                            value={values.email}/>
                        
                            {touched.email && errors.email && <Text style={{fontSize:10, color:COLORS.RED, margin: 0}}>{errors.email}</Text>}
                            
                            <TextInput 
                            style={SignUpStyle.inputField} 
                            placeholderTextColor={COLORS.PRIMARY}
                            onBlur={() => setFieldTouched('phonenumber')}
                            onChangeText={handleChange('phonenumber')}
                            keyboardType='phone-pad'
                            value={values.phonenumber}
                            placeholder="PhoneNumber"/>

                            {touched.phonenumber && errors.phonenumber && <Text style={{fontSize:10, color:COLORS.RED, margin: 0}}>{errors.phonenumber}</Text>}

                            <TextInput 
                            style={SignUpStyle.inputField} 
                            placeholderTextColor={COLORS.PRIMARY} 
                            onBlur={() => setFieldTouched('password')}
                            onChangeText={handleChange('password')}
                            placeholder="password"
                            value={values.password}/>      

                            {touched.password && errors.password && <Text style={{fontSize:10, color:COLORS.RED, margin: 0}}>{errors.password}</Text>}

                            <TextInput 
                            style={SignUpStyle.inputField} 
                            placeholderTextColor={COLORS.PRIMARY} 
                            onBlur={() => setFieldTouched('confirmPassword')}
                            onChangeText={handleChange('confirmPassword')}
                            value={values.confirmPassword}
                            placeholder="confirm password" />

                            {touched.confirmPassword && errors.confirmPassword && <Text style={{fontSize:10, color:COLORS.RED, margin: 0}}>{errors.confirmPassword}</Text>}

                            <TouchableOpacity style={SignUpStyle.signBtn} onPress={() => {
                                alert(values.name)
                                // console.log(handleSubmit())
                                const firtName = values.name.split(" ")[0]
                                const lastName = values.name.split(" ")[0]
                                appwrite.createAccount(values.email, firtName,lastName, values.phonenumber, values.confirmPassword).then(response => {
                                    console.log(response)
                                }).catch(error => {
                                    console.log(error)
                                })
                            }}>
                                <Text style={SignUpStyle.sign}>Sign Up</Text>
                            </TouchableOpacity>
                            <View style={SignUpStyle.yesAccountSection}>
                                <Text style={SignUpStyle.yesAccount}>If you already have an account?</Text>
                                <TouchableOpacity onPress={()=>{
                                    navigation.navigate("Login")
                                }}>
                                    <Text style={SignUpStyle.signUp}> Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }
            </Formik>
            <StatusBar style="auto"/>
        </View>
    )
}