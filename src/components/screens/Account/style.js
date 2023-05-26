import { StyleSheet } from "react-native";
import { COLORS } from "../../contants/contants";

export const profileStyle = StyleSheet.create({
    // The styles for Profile.js file start below
    pContainer:{
        flex:1,
        justContent:'center',
        alignItems: 'center',
    },
    pheader:{
        flexDirection:'row',
        width:'95%',
        height:'40%',
        alignItems:"center",
        justifyContent:'center',
        margin:10,
        backgroundColor:COLORS.PRIMARY,
        borderRadius:10,
    },
    pHeaderBtn:{
        width:100,
        height:100,
        backgroundColor:COLORS.WHITE,
        margin:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    pHeaderBtnText:{
        textAlign:"center"
    },
    pcardBtn:{
        width:'80%',
        height:'50%',
        backgroundColor:COLORS.WHITE,
        marginTop:-60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    ptransparentBtn:{
        margin:15,
    },
    plogout:{
        margin:10,
        backgroundColor:COLORS.PRIMARY,
        width:'50%',
        padding:5,
        borderRadius:10
    },
    pLogoutText:{
        textAlign:"center",
        color:COLORS.WHITE
    }, // End of the styles for Profile.js

    // Styles for Memories.js file start here
    mContainer:{
        flex:1,
    },
    mheader:{
        width:'100%',
        height:'10%',
        backgroundColor:COLORS.PRIMARY,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between"
    },
    mHeaderText:{
        color:COLORS.WHITE,
        fontSize:20,
        textAlign:'center',
    },
    mImage:{
        margin:10,
    },
    imges:{
        width:100,
        height:100,
        margin:10,
    }
});
