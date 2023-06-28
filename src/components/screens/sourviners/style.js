import {
    StyleSheet
} from 'react-native';
import { AccommodationStyle } from '../Accommodations/style';
import { COLORS } from '../../../constants/constants';

export const sourvinerStyles = StyleSheet.create({
    sContainer:{
        ...AccommodationStyle.aContainer
    },
    header:{
        ...AccommodationStyle.header,
        borderRadius: 5,
        
    },
    bkheader:{
        width:"100%",
        height:'100%',
        borderRadius:10,
        flex:1,
        overflow: 'hidden'
    },
    backBtn:{
        
    },
    zindexView:{
        ...AccommodationStyle.zindexView,
        height:'60%'
    },
    sdetail:{
        ...AccommodationStyle.adetail
    },
    sBuy:{
        ...AccommodationStyle.aBuy,
        backgroundColor:COLORS.PRIMARY_2,
        marginTop:'50%'
    },
    buyBtn:{
        ...AccommodationStyle.bookBtn,
        width:100,
        alignItems:'center'
    },
    btnText:{
        ...AccommodationStyle.btnText,
    },
});