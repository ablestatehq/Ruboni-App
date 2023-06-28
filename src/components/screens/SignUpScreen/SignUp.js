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
import { useContext, } from "react"
import appwriteContext from "../../contexts/appwriteContext"
import { signUp } from "../../../utils/functions"
import UserType from '../../../utils/enum'

export default function SignUp({navigation}) {
    const { appwrite } = useContext(appwriteContext);

    return(
        <View style={SignUpStyle.container}>
            <View style={SignUpStyle.header}>
                <Text style={SignUpStyle.signText}>Register with Us</Text>
            </View>
            <Formik 
                initialValues={{fName:"",lName:"", email:"", password:"", phonenumber:"", confirmPassword:""}}
                onSubmit={values => {
                    console.log(values.email);
                    const object = {...values, userType:UserType.Cust }
                    signUp(appwrite, object);
                    navigation.navigate('Login')
                }}
                validationSchema={yup.object().shape({
                    fName: yup
                    .string()
                    .required(),

                    lName: yup
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
                            onBlur={() => setFieldTouched('fName')}
                            onChangeText={handleChange('fName')}
                            value={values.fName}
                            placeholder="First name"/>

                            {touched.fName && errors.fName && <Text style={{fontSize:10, color:COLORS.RED, margin: 0}}>{errors.fName}</Text>}

                            <TextInput 
                            style={SignUpStyle.inputField} 
                            placeholderTextColor={COLORS.PRIMARY} 
                            onBlur={() => setFieldTouched('lName')}
                            onChangeText={handleChange('lName')}
                            value={values.lName}
                            placeholder="Last name"/>

                            {touched.lName && errors.lName && <Text style={{fontSize:10, color:COLORS.RED, margin: 0}}>{errors.lName}</Text>}
                            
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
                            secureTextEntry
                            placeholder="password"
                            value={values.password}/>      

                            {touched.password && errors.password && <Text style={{fontSize:10, color:COLORS.RED, margin: 0}}>{errors.password}</Text>}

                            <TextInput 
                            style={SignUpStyle.inputField} 
                            placeholderTextColor={COLORS.PRIMARY} 
                            onBlur={() => setFieldTouched('confirmPassword')}
                            secureTextEntry
                            onChangeText={handleChange('confirmPassword')}
                            value={values.confirmPassword}
                            placeholder="confirm password" />

                            {touched.confirmPassword && errors.confirmPassword && <Text style={{fontSize:10, color:COLORS.RED, margin: 0}}>{errors.confirmPassword}</Text>}

                            <TouchableOpacity style={SignUpStyle.signBtn} onPress={handleSubmit}>
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