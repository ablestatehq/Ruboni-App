import { StyleSheet } from "react-native";
import { COLORS } from "../../contants/contants";

export const AccommodationStyle = StyleSheet.create({
    // accView.js file styles. below
    aContainer:{
        // margin:10,
        flex:1,
        alignItems:'center'
    },
    header:{
        // padding:5,
        // position: "absolute",
        margin:10,
        height:'30%',
        width:'95%',
        borderRadius:10,
        backgroundColor:'blue',
    },
    zindexView:{
        width:'90%',
        height:'70%',
        backgroundColor:COLORS.WHITE,
        borderRadius:10,
        borderWidth:2,
        marginTop:-50,
        borderColor:COLORS.WHITE_1,
        padding:10,
        // alignItems:'center'
    },
    adetail:{
        width:'90%',
        height:'40%',
        marginTop:10,
        // padding:5,
        borderRadius:5,
        borderWidth:1,
        borderColor:COLORS.WHITE_1
    },  
    selectPackage:{
        width:'90%',
        height:"20%",
        marginTop:10,
    },
    aMap:{
        height:'20%'
    },
    aBuy:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
        padding:10
    },
    bookBtn:{
        backgroundColor:COLORS.PRIMARY,
        borderRadius:10,
        padding:5,
    },
    btnText:{
        color:COLORS.WHITE,
        textAlign:"center"
    },
    accScroll:{
        // borderWidth:1,
        height:'100%', 
        width:'100%',
        padding:5,
    }, // End of accView.js file styles


    // make reservation component style below
    mContainer:{
        width:'100%',
        height:'100%',
    },
    mHeader:{
        width:'100%',
        height:'10%',
        backgroundColor: COLORS.PRIMARY,
        flexDirection: 'row',
        padding:5,
        alignItems:'center',

    },
    mHText:{
        fontSize:20,
        color:COLORS.WHITE,
        marginLeft:50,
        textAlign:'center',
    },
    mTextInput:{
        
    },
    mContent:{
        width:'100%',
        padding:20,
        flexDirection:'column',
        alignItems:"center"
    },
    mTextInput:{
        width:'100%',
        borderWidth:1,
        borderColor:COLORS.PRIMARY,
        height:50,
        marginBottom:10,
    },
    mDatePicker:{
        backgroundColor:COLORS.PRIMARY_1,
        margin:10,
        height:50,
        justifyContent:'center',
        width:'90%'
    },
    mText:{
        textAlign:"center",
    },
    mbtnText:{
        color:COLORS.WHITE,
        textAlign:'center'
    },
    mSection:{
        backgroundColor: COLORS.PRIMARY_2,
        width:'100%',
        height:100,
    },
    mProceed:{
        borderRadius:10,
        backgroundColor:COLORS.PRIMARY,
        width:'50%',
        height:30,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
    }, // End of reserversation.js file styles below.

    //List_of_accommodations.js file styles below
    listItemsView:{
        backgroundColor:COLORS.PRIMARY,
        flexDirection:"row",
        height:'15%',
        alignItems:"center"
    },
    listHeaderText:{
        textAlign:"center",
        fontSize:20,
        width:'80%',
        color:COLORS.WHITE,
    },
    list:{
        flexDirection:'column',
        alignItems:"center"
    }
});
