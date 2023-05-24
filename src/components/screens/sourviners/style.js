import {
    StyleSheet
} from 'react-native';
import { AccommodationStyle } from '../Accommodations/style';
import { COLORS } from '../../contants/contants';

export const sourvinerStyles = StyleSheet.create({
    sContainer:{
        ...AccommodationStyle.aContainer
    },
    header:{
        ...AccommodationStyle.header
    },
    bkheader:{

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
    }
});