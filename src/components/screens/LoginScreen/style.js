import { StyleSheet } from "react-native";
import { COLORS, DIMENS } from "../../contants/contants";

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
        },
        leftBtn: {
            width: 25,
            height: 10,
            color:COLORS.WHITE,
        },
        loginText:{
            fontSize: 25,
            color: COLORS.WHITE,
            textAlign: "center",
        },
        loginHeader:{
            fontSize: 15,
            textAlign: "center",
            color: COLORS.PRIMARY,
        },
        logoView:{
            // This is a view that will contain an image of the company's logo 
            width: 50,
            height: 50,
            borderRadius: 25,
            borderWidth: 2,
            borderColor: COLORS.PRIMARY_2,
        },
        formView:{
            width:'100%',
            height:'90%',
            backgroundColor: COLORS.WHITE,
        },
        logoView:{
            width: 50,
            height: 50,
            alignSelf:'center',
        },
        inputField: {
            // TextInput field for login section 
            width:'80%',
            height:40,
            padding: 10,
            borderWidth:1,
            borderColor: COLORS.PRIMARY,
        },
        loginBtn:{
            // Login button space 
            width: 142,
            height: 36,
            backgroundColor: COLORS.PRIMARY,
            borderRadius: 100,
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