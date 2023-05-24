import {
    View,
} from 'react-native';
import Btn from '../../helper/Btn';
import { profileStyle } from './style';

export default function Profile(props) {
    return(
        <View>
            <View style={profileStyle.header}>

            </View>
            <View style={profileStyle.cardBtn}>
                <Btn 
                    BtnStyle={profileStyle.transparentBtn}
                    BtnText="Notification" />
                <Btn 
                    BtnStyle={profileStyle.transparentBtn}
                    BtnText="Payment methods" />
                <Btn 
                    BtnStyle={profileStyle.transparentBtn}
                    BtnText="Settings" />
                <Btn 
                    BtnStyle={profileStyle.logout}
                    BtnText="Log out" />
            </View>
        </View>
    )
}