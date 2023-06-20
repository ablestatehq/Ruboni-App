import { StyleSheet } from "react-native";
import { COLORS, DIMENS } from "../../../constants/constants";

export const LoginStyle = StyleSheet.create({
        container:{
            width: DIMENS.SCREENWIDTH,
            height: DIMENS.SCREENHEIGHT,
            backgroundColor: COLORS.PRIMARY,
        },
        header:{
            width: '100%',
            height: '10%',
            flexDirection: 'row',
            alignItems: "center"
        },
        leftBtn: {
            marginRight: 60
        },
        loginText:{
            fontSize: 25,
            color: COLORS.WHITE,
        },
        loginHeader:{
            fontSize: 20,
            marginTop: 10,
            textAlign: "center",
            color: COLORS.PRIMARY,
        },
        logoView:{
            // This is a view that will contain an image of the company's logo 
            width: 100,
            height: 100,
            borderRadius: 25,
            borderWidth: 2,
            borderColor: COLORS.PRIMARY_2,
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
        formContainer:{
            width:"100%",
            flexDirection:"column",
            justifyContent:'space-between',
            alignItems:"center",
        },
        inputField: {
            // TextInput field for login section 
            width:'90%',
            padding: 10,
            borderWidth:1,
            margin: 20,
            borderColor: COLORS.PRIMARY,
            borderRadius: 10,
        },
        loginBtn:{
            // Login button space 
            width: 142,
            height: 36,
            backgroundColor: COLORS.PRIMARY,
            padding: 2,
            borderRadius: 100,
            margin: 5,
        },
        login:{
            // Text in loginBtn 
            fontSize: 20,
            color: COLORS.WHITE,
            textAlign: "center",
        },
        forgot:{
            // If the user forgot password
            textAlign: "center"
        },
        noAccountSection:{
            flexDirection: "row",
            width: 246,
            height: 19,
            justifyContent: "center",
            margin:20,
        },
        noAccount:{
            fontSize: 15,
            color: COLORS.PRIMARY,
        },
        signUp:{
            fontSize: 15,
            color: COLORS.PRIMARY_1,
        }
    }
)