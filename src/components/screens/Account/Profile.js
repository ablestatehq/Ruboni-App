import {
    View,
} from 'react-native';
import Btn from '../../helper/Btn';
import { profileStyle } from './style';
import Dialog from '../../helper/dialog';
import { useState } from 'react'

export default function Profile(props) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleDialogVisibility = () => {
        setIsVisible(!isVisible);
    }
    const pressYes = () => {
        setIsVisible(!isVisible)
    }
    return(
        <View style={profileStyle.pContainer}>
            <View style={profileStyle.pheader}>
                <Btn 
                BtnStyle={profileStyle.pHeaderBtn}
                BtnText="Memories"
                BtnTextStyle={profileStyle.pHeaderBtnText}
                Onpress={() => props.navigation.navigate('Memories')} />
                <Btn 
                BtnStyle={profileStyle.pHeaderBtn}
                BtnText="Photos"
                tnTextStyle={profileStyle.pHeaderBtnText}
                Onpress={() => alert('Goes to photos')}/>
            </View>
            <View style={profileStyle.pcardBtn}>
                <Btn 
                    BtnStyle={profileStyle.ptransparentBtn}
                    BtnText="Trips"
                    Onpress={() => alert('Goes to Takes you to trips')} />
                <Btn 
                    BtnStyle={profileStyle.ptransparentBtn}
                    BtnText="Payment methods"
                    Onpress={() => props.navigation.navigate('PaymentMethod')} />
                <Btn 
                    BtnStyle={profileStyle.ptransparentBtn}
                    BtnText="Settings" 
                    Onpress={() => props.navigation.navigate('Settings')}/>
                <Btn 
                    BtnStyle={profileStyle.plogout}
                    BtnText="Log out"
                    BtnTextStyle={profileStyle.pLogoutText}
                    Onpress={() => toggleDialogVisibility()} />
                <Dialog title="Log out" message="Do you really want to logout" isV={isVisible} yesPressed={pressYes} noPressed={pressYes}/>
            </View>
        </View>
    )
}