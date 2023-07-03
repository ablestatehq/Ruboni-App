import {
    View,
    TouchableOpacity,
} from 'react-native'
import { COLORS } from '../../constants/constants'
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react';
import { AccommodationStyle } from '../screens/Accommodations/style';
export default function Ratings(){
    const [ starRating, setStarRating ] = useState(null);

    const makeReview = () => {

    }
    
    return(
        <View style={AccommodationStyle.starRating}>
            <TouchableOpacity onPress={()=>{
                setStarRating(1)
            }}>
                <AntDesign name={starRating >= 1 ? "star" : "staro"} size={15} color={COLORS.PRIMARY_1} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                setStarRating(2)
            }}>
                <AntDesign name={starRating >= 2 ? "star" : "staro"} size={15} color={COLORS.PRIMARY_1} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                setStarRating(3)
            }}>
                <AntDesign name={starRating >= 3 ? "star" : "staro"} size={15} color={COLORS.PRIMARY_1} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                setStarRating(4)
            }}>
                <AntDesign name={starRating >= 4 ? "star" : "staro"} size={15} color={COLORS.PRIMARY_1} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                setStarRating(5)
            }}>
                <AntDesign name={starRating >= 5 ? "star" : "staro"} size={15} color={COLORS.PRIMARY_1} />
            </TouchableOpacity>
        </View>
    )
}