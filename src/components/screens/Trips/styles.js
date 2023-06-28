import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants/constants";

export const itineraryStyle = StyleSheet.create({
    container:{
    },
    header:{
        flexDirection: "row",
        backgroundColor:COLORS.PRIMARY,
        padding:10,
        alignItems:"center"
    },
    content:{
        padding:10,
    },
    hText:{
        fontSize: 20,
        color:COLORS.WHITE,
        marginLeft:20,
    }
});

export const viewItinerary = StyleSheet.create({

})