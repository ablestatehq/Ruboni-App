import { StyleSheet } from "react-native";
import { COLORS, DIMENS, FONTS } from "../../../constants/constants";

export const DashboardStyle = StyleSheet.create({
    container:{
        width: DIMENS.SCREENWIDTH,
        backgroundColor: COLORS.WHITE_1,
        flexDirection:"column",
        // padding:5,
        flex:1
    },
    
    searchView:{
        width: '90%',
        borderWidth: 1,
        borderColor: COLORS.PRIMARY,
        borderRadius:10,
        padding:10,
        alignSelf:'center',
        flexDirection: "row",
        justifyContent: 'space-between',
        margin:20,
    },
    sourvenirsView:{
        backgroundColor: COLORS.WHITE,
        width: "100%",
        height: "15%",
        marginBottom: 10,
    },
    desStyle:{
        fontSize:FONTS.SIZE.NORMAL,
        margin:0
    },
    hotelsView:{
        width: "100%",
        backgroundColor:COLORS.WHITE,
        marginBottom: 5,
    },
    cardView:{
        width:200,
        padding:5
    },
    cardImgView:{
        width: "100%",
        height: 200,
        borderRadius:5,
    },
    touch:{
        width:'100%',
    },

    text:{
        fontSize:FONTS.SIZE.SMALLEST,
        marginTop:0
    },
    
    // Styles for the item sourvinir
    itemView:{
        width:100,
        padding:5
    },

    itemStyle:{
        width:'100%',
        height:'80%'
    },

    itemFooter:{

    },

    vText:{
        textAlign: "center"
    },
    Vendord:{
        width: '90%',
        padding: 5,
        backgroundColor: COLORS.PRIMARY_1,
        alignSelf:"center",
        borderRadius: 5,
    },
    scroll:{
        flexGrow:1,
        paddingBottom: 100
    }
});
