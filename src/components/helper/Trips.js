import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { COLORS } from '../../constants/constants'
export default function Trips({title, description}){
    return(
        <View style={styles.container}>
            <Text style={styles.Htext}>{title}</Text>
            <Text style={styles.text}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'90%',
        backgroundColor:COLORS.PRIMARY_1,
        borderRadius:10,
        margin:10
    },
    Htext:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'left',
    },
    text:{
        fontSize:15,
        textAlign:'left',
    }
})