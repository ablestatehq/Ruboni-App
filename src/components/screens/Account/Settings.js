import {
    View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../../contants/contants';

export default function Settings(props){
    return (
        <View>
            <View>
            <AntDesign name='left' size={32} color={COLORS.PRIMARY} onPress={()=>props.navigation.navigate('Account')}/>
            </View>
        </View>
    )
}