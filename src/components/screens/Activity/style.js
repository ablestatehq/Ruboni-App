import { StyleSheet } from "react-native";
import { AccommodationStyle } from "../Accommodations/style";
import { COLORS } from "../../contants/contants";

export const ActivityStyle = StyleSheet.create({
    // styles for the viewActivity.js file below,
    container:{
        ...AccommodationStyle.aContainer,
    },

    header:{
        ...AccommodationStyle.header,
    },
    zindexView:{
        ...AccommodationStyle.zindexView,
    },
    pscroll:{
        ...AccommodationStyle.accScroll
    },
    pdetail:{
        ...AccommodationStyle.adetail,
    },
    selectPackage:{
        ...AccommodationStyle.selectPackage
    },
    pbuy:{
        ...AccommodationStyle.aBuy,
    },
    bookBtn:{
        ...AccommodationStyle.bookBtn,
        width:100,
        alignItems:'center'
    },
    btnText:{
        color:COLORS.WHITE
    },
    // styles for the list_of_activities below
    listItemsView:{
        ...AccommodationStyle.listItemsView
    },
    listHeaderText:{
        ...AccommodationStyle.listHeaderText
    },
    list:{
        ...AccommodationStyle.list
    }
});
