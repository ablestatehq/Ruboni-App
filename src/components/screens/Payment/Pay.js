import {
    View,
    Text,

} from 'react-native'
import { PayStyle } from './style'
import { AntDesign } from '@expo/vector-icons'
import Btn from '../../helper/Btn'


// Well still, if the navigation is SourvinerView, show a different header 
export default function Pay(props){
    return(
        <View>
            <View style={PayStyle.paymentMethod}>
                <AntDesign name='left' size={32} color={white} />
                <Text>Make Payment</Text>
                {/* Show payment method and ask the user to choose one  */}
            </View>
            <View style={PayStyle.orderDetails}>
                <View>
                    <Text>Items</Text>
                    <Text>{props.noItems}</Text>
                </View>
                <View>
                    <Text>Total</Text>
                    <Text>sum of the all the money</Text>
                </View>
                <Btn BtnText="Make payment"/>
            </View>
        </View>
    )
}