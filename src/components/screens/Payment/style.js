import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants/constants";

export const PayStyle = StyleSheet.create({
    paymentMethod:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        backgroundColor:COLORS.WHITE_1
    },
    payHeading:{
        fontSize:FONTS.SIZE.HEADING,
        marginLeft:40
    },
    orderDetails:{
        padding:10,
    },
    payDetails:{
        padding:10,
        backgroundColor:COLORS.WHITE_1,
        margin:10
    }
});