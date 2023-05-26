import {
    View,
    Text
} from 'react-native';
import { COLORS } from '../../contants/contants';
import { AntDesign } from '@expo/vector-icons';


export default function PaymentMethod(props){
    return(
        <View>
            <View>
                <AntDesign name='left' size={32} color={COLORS.PRIMARY} onPress={()=>props.navigation.navigate('Account')}/>
            </View>
            <Text>Change your payment methods</Text>
        </View>
    )
}