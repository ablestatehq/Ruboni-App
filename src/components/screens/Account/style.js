import { StyleSheet } from "react-native";
import { COLORS, DIMENS } from "../../../constants/constants";
import { FONTS } from "../../../constants/constants";

export const profileStyle = StyleSheet.create({
    // The styles for Profile.js file start below
    pContainer:{
        backgroundColor:COLORS.WHITE,
        height: DIMENS.SCREENHEIGHT,
        width:DIMENS.SCREENWIDTH
    },
    pheader:{

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
        width:'95%',
        alignItems:"center",
        // borderWidth:1,
        margin:10
    },
    ptransparentBtn:{
        width:'95%',
        margin:15,
        backgroundColor:COLORS.WHITE_1,
        padding:15,
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    plogout:{
        margin:10,
        backgroundColor:COLORS.PRIMARY,
        width:'90%',
        padding:10,
        borderRadius:20
    },
    pLogoutText:{
        textAlign:"center",
        color:COLORS.WHITE
    }, // End of the styles for Profile.js

    pimage: {
        width:100,
        height: 100,
        borderWidth:1,
        alignItems: "center",
        borderRadius:100,
        margin:5,
        borderColor: COLORS.PRIMARY_1,
        borderWidth:1
    },
    lText: {
        width:100,
        height:100,
        backgroundColor: COLORS.PRIMARY,
        borderRadius:100,
        borderWidth: 3,
        borderColor:COLORS.PRIMARY_2,
    },

    avatarIcon: {
        width: '95%',
        alignItems:"center",
        // borderWidth:1,
        margin:10
    },
    pText:{
        width: '95%', 
        alignItems: 'center'
    },
    contentSection: {
        
    },
    upper:{
        // marginTop: 
        margin: 10,
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    input: {
        width: '90%',
        padding:10,
        borderWidth:1,
        borderColor: COLORS.PRIMARY,
        margin: 5,
        
    },
    settings: {
        width:"90%",
        paddingBottom:10,
        paddingTop:10,
        borderWidth:1,
        borderColor: COLORS.PRIMARY,
        justifyContent:"center",
        alignItems:"center"
    },

    pscroll:{
        height:'65%',
        // marginTop:5
    },
    pdisplay:{
        flexDirection: "row", 
        justifyContent:'space-between', 
        width: '90%'
    },
    pedit: {
        position: 'absolute', 
        width: '90%', 
        alignItems: 'center', 
        bottom: 5,
        flexDirection:"row",
        // borderWidth:1,
        justifyContent:"center"
    }
});

 // Styles for Memories here
export const memoryStyle = StyleSheet.create({
    
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
})

// Settings Style
export const settingStyle = StyleSheet.create({
    container:{
        width:DIMENS.SCREENWIDTH,
        height: DIMENS.SCREENHEIGHT,
        backgroundColor:COLORS.WHITE_1
    },

    settingHeader:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        backgroundColor:COLORS.WHITE
    },

    settingHT:{
        fontSize:FONTS.SIZE.HEADING,
        marginLeft:40,
    },

    settings:{
        padding:10,
        backgroundColor:COLORS.WHITE,
        margin:10
    },

    clickSettings:{
        margin:5,
        flexDirection:"row",
        justifyContent:"space-between",
        height:30
    }
});


// Payment methods style
export const paymentMethods = StyleSheet.create({
    container:{

    },

    header:{
        flexDirection: "row",
        alignItems:"center",
        padding:5,
        backgroundColor:COLORS.WHITE
    },

    payText: {
        fontSize: 20,
        marginLeft:20,
    },

    content:{
        padding:10,
    }
})