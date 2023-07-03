import {
    View,
    Text,
    StatusBar,
    FlatList
} from 'react-native';
import { itineraryStyle } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../../../constants/constants';
import Trips from './Trips';

export default function Itinerary({navigation}){
    const trips = []
    return(
        <View style={itineraryStyle.container}>
            <View style={itineraryStyle.header}>
                <AntDesign name='left' size={25} color={COLORS.WHITE} onPress={() => navigation.navigate('Dashboard')}/>
                <Text style={itineraryStyle.hText}>Your Itineraries</Text>
            </View>
            <View style={itineraryStyle.content}>
                <FlatList 
                data={trips}
                renderItem={({item}) => (
                    <Trips 
                    title={item.title} 
                    destination={item.destination} 
                    time={item.bookedTime}
                    period={item.schedulePeriod} 
                    OnPress={()=>alert("See a summary of your itinerary")}/>
                )}
                />
            </View>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.PRIMARY}/>
        </View>
    )
}