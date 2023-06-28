import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import { COLORS } from '../../../constants/constants'
export default function Trips({title, destination, image, time, period, OnPress}){
    return(
        <TouchableOpacity style={styles.container} onPress={OnPress}>
            <Image source={image} style={styles.imageStyle}/>
            <View style={styles.textContent}>
                <Text style={styles.Htext}>{title}</Text>
                <Text style={styles.text}>{period.start} - {period.end}</Text>
                <Text style={styles.text}>{destination}</Text>
                <View>
                    <Text style={styles.text}>{time}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'95%',
        backgroundColor:COLORS.WHITE,
        borderRadius:5,
        flexDirection: 'row',
        justifyContent:'space-between',
        margin:10
    },
    textContent:{
        flexDirection:'column',
    },
    Htext:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'left',
    },
    text:{
        fontSize:15,
        opacity:0.5
    },
    imageStyle: {
        width:80,
        height: 80,
        margin: 5,
    }
})