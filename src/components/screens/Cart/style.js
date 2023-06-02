import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants/constants";

export const cartStyle = StyleSheet.create({
    // Item styles here
    itemView:{
        width:'100%',
        backgroundColor: COLORS.WHITE,
        height:150,
        borderColor:'green',
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        margin:5,
    },

    itemImg:{
        width:100,
        height:100,
    },

    increase:{
        flexDirection:"row",
        justifyContent:"space-between",
    },

    leftSide:{
        width:"30%",
        borderWidth:1,
        margin:5
    },
    
    // Item styles end here

    // Styles of cart here
    container:{
        padding:0,
        backgroundColor: COLORS.WHITE_1,
        flex:1,
    },

    header:{
        backgroundColor:COLORS.PRIMARY,
        flexDirection:'row',
        alignItems:'center'
    },
    textCart:{
        color: COLORS.WHITE,
        fontSize:FONTS.SIZE.HEADING,
        marginLeft: 100,
    },

    shopItems:{
        flex:1, // This helps me push the order button to the bottom
        // borderWidth:5
        padding:5,
    },

    footer:{
        height:50,
        flexDirection:'row',
        justifyContent:"center",
        padding:10,
    },
    orderBtn:{
        backgroundColor:COLORS.PRIMARY,
        width:'70%',
        padding:5,
        borderRadius:10,
    },
    orderBtnText:{
        textAlign:'center',
        color:COLORS.WHITE,
    }

})