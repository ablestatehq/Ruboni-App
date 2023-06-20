import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/constants";
import { LoginStyle } from "../LoginScreen/style";

const {container, header} = LoginStyle;

export const SignUpStyle = StyleSheet.create({
    
    container:{
        ...container
    },
    header:{
        ...header,
        justifyContent: "center"
    },
    signText:{
        fontSize: 25,
        color: COLORS.WHITE,
        textAlign: "center"
    },
    signHeader:{
        fontSize: 20,
        marginTop: 10,
        textAlign: "center",
        color: COLORS.PRIMARY,
    },
    formView:{
        width:'100%',
        height:'90%',
        backgroundColor: COLORS.WHITE,
        padding: 5,
        // justifyContent:"center"
        alignItems: "center",
        // borderWidth:5,
        // borderColor:COLORS.BLACK
    },
    logoView:{
        width: 50,
        height: 50,
        alignSelf:'center',
    },
    loginDetails: {
        width: '90%',
        height: '70%',
        alignItems:'center'
    },
    inputField: {
        // TextInput field for login section 
        width:'80%',
        height:40,
        padding: 10,
        borderWidth:1,
        margin: 10,
        borderColor: COLORS.PRIMARY,
        borderRadius: 10,
    },
    signBtn:{
        // Login button space 
        width: 142,
        height: 36,
        backgroundColor: COLORS.PRIMARY,
        padding: 2,
        borderRadius: 100,
        margin: 5,
    },
    sign:{
        // Text in loginBtn 
        fontSize: 20,
        color: COLORS.WHITE,
        textAlign: "center",
    },
    yesAccountSection:{
        flexDirection: "row",
        width: 246,
        height: 19,
        justifyContent: "center",
        margin:20,
    },
    yesAccount:{
        fontSize: 15,
        color: COLORS.PRIMARY,
    },
    signUp:{
        fontSize: 15,
        color: COLORS.PRIMARY_1,
    }
});
