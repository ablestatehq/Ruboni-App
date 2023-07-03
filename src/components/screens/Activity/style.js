import { StyleSheet } from "react-native";
import { AccommodationStyle } from "../Accommodations/style";
import { COLORS } from "../../../constants/constants";

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
        width: "90%"
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
    bkheader:{
        height:'100%',
        width:'100%',
        borderRadius:10,
        flex: 1,
        overflow: "hidden"
    },
    aMap:{
        // ...AccommodationStyle.adetail,
    },
    
    // styles for the list_of_activities below
    listItemsView:{
        backgroundColor:COLORS.PRIMARY,
        flexDirection: "row",
        alignItems:"center",
        padding:5
    },
    listHeaderText:{
        ...AccommodationStyle.listHeaderText
    },
    list:{
        ...AccommodationStyle.list
    }
});
