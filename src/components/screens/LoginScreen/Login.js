import { Text,
         View,
         TextInput,
         StatusBar,
         TouchableOpacity
} from "react-native"

import { LoginStyle } from "./style"  
import { COLORS, userBucket } from "../../../constants/constants"
import { AntDesign } from "@expo/vector-icons"
import { Formik } from "formik"
import * as yup from 'yup';
import { useContext } from "react"
import appwriteContext from "../../contexts/appwriteContext"
import { databaseId, uCollection} from '../../../constants/constants'

export default function Login({navigation}){
    const { appwrite, setIsLoggedIn,user, setUser, setToken, setProfile } = useContext(appwriteContext);
    const expireDuration = 2592000;
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
                        onSubmit={values => {
                            // console.log(values)
                            try {
                                appwrite.login(values.email, values.password).then( async (response) => {
                                    const { $id: sessionId } = response;
                                    const { userId } = response;

                                    appwrite.getUserPref().then(data => {
                                        // console.log(data);
                                        const p = appwrite.storage.getFilePreview(userBucket, data.DP).href;
                                        setProfile(p);
                                    }).catch(error => {
                                        console.log("Error in getting userPrefs",error)
                                    })
                                    let user = {}
                                    await appwrite.returnDocument(databaseId, uCollection, response.userId).then(data => {
                                        user = {...data};
                                    })
                                    // return appwrite.account.createJWT(sessionId);
                                    setUser({...user.documents[0]});

                                    setIsLoggedIn(true)
                                }).catch(error => {
                                    console.log("Error here in login",error)
                                })
                            } catch (error) {
                                console.log(error)
                            }
                        }}
                        validationSchema={yup.object().shape({
                            email: yup
                            .string()
                            .email()
                            .required(),
                            password: yup
                            .string()
                            .min(5, "Password should not be less than 5")
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
            <StatusBar style="auto" backgroundColor={COLORS.PRIMARY}/>
        </View>
    )
}
