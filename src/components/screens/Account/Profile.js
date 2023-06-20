import {
    View,
} from 'react-native';
import Btn from '../../helper/Btn';
import { profileStyle } from './style';
import Dialog from '../../helper/dialog';
import { useContext, useState } from 'react'
import appwriteContext from '../../contexts/appwriteContext';

export default function Profile({navigation}) {
    const [isVisible, setIsVisible] = useState(false);
    const { isLoggedIn } = useContext(appwriteContext);
    
    const toggleDialogVisibility = () => {
        setIsVisible(!isVisible);
    }

    const pressYes = () => {
        setIsVisible(!isVisible)
    }
    return(
        <View style={profileStyle.pContainer}>
            <View style={profileStyle.pcardBtn}>
            <Btn 
                    BtnStyle={profileStyle.ptransparentBtn}
                    BtnText="Memories"
                    Onpress={() => navigation.navigate('Memories')} 
                    isDisable={isLoggedIn ? false : true}/>
                <Btn 
                    BtnStyle={profileStyle.ptransparentBtn}
                    BtnText="Trips"
                    Onpress={() => alert('Goes to Takes you to trips')} 
                    isDisable={isLoggedIn ? false : true}/>
                <Btn 
                    BtnStyle={profileStyle.ptransparentBtn}
                    BtnText="Payment methods"
                    Onpress={() => navigation.navigate('PaymentMethod')} 
                    isDisable={false}/>
                <Btn 
                    BtnStyle={profileStyle.ptransparentBtn}
                    BtnText="Settings" 
                    Onpress={() => navigation.navigate('Settings')}
                    isDisable={false}/>
                <Btn 
                    BtnStyle={profileStyle.plogout}
                    BtnText={isLoggedIn ? "Logout" : "Login"}
                    BtnTextStyle={profileStyle.pLogoutText}
                    Onpress={() => {
                        if(isLoggedIn){
                            toggleDialogVisibility();
                        }else{
                            // go to login screen.
                            navigation.navigate('Login', {
                                screenName: "Profile"
                            });
                        }
                    }}/>
                <Dialog title="Log out" message="Do you really want to logout" isV={isVisible} yesPressed={pressYes} noPressed={pressYes}/>
            </View>
        </View>
    )
}