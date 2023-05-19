import { StyleSheet } from "react-native";
import { COLORS, DIMENS } from "../../contants/contants";

export const DashboardStyle = StyleSheet.create({
    container:{
        width: DIMENS.SCREENWIDTH,
        height: DIMENS.SCREENHEIGHT,
        backgroundColor: COLORS.WHITE_1,
        flexDirection:"column",
        padding:10,
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
        height: "20%",
        borderWidth: 1,
        marginBottom: 10,
    },
    accomView:{
        backgroundColor: COLORS.WHITE,
        width: "100%",
        height: "20%",
        borderWidth: 1,
        marginBottom: 10,
    },
    hotelsView:{
        width: "100%",
        height: "20%",
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor: COLORS.PRIMARY,
    }
});
