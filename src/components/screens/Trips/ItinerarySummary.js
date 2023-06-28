import {
    View,

} from 'react-native';
import { viewItinerary } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../../../constants/constants';

export default function ItineraryView(){
    return(
        <View style={viewItinerary.contains}>
            <View style={viewItinerary.header}>
                <AntDesign name='left' size={20} color={COLORS.WHITE} onPress={()=>alert("Back to itinerary")}/>
                <Text>Your trip plan</Text>
            </View>
            <View style={viewItinerary.image}>
                <Text>simple descrition</Text>
            </View>
            <View style={viewItinerary.scrollSection}>
                
            </View>
        </View>
    )
}