import {
    TouchableOpacity,
    View,
    Text,
    StatusBar,
    Switch,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../../../constants/constants';
import { settingStyle } from './style';
import { useContext, useState } from 'react';
import appwriteContext from '../../contexts/appwriteContext';

export default function Settings(props){
    const { isLoggedIn } = useContext(appwriteContext);
    const [isEnabled, setIsEnabled] = useState(false)


    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
    }
    return (
        <View style={settingStyle.container}>
            <View style={settingStyle.settingHeader}>
                <AntDesign name='left' size={32} color={COLORS.BLACK} onPress={()=>
                    props.navigation.navigate(isLoggedIn ? 'name' : 'Guest')
                }/>
                <Text style={settingStyle.settingHT}>Settings</Text>
            </View>
            <View style={settingStyle.settings}>
                <View style={settingStyle.clickSettings} onPress={() => alert("enable push notification.")}>
                    <Text>Push Notification</Text>
                    {/* <AntDesign name='right' size={20} color={COLORS.BLACK} /> */}
                    <Switch 
                        trackColor={{false: COLORS.PRIMARY, true: COLORS.PRIMARY}}
                        thumbColor={isEnabled ? COLORS.PRIMARY_1 : COLORS.PRIMARY_2}
                        ios_backgroundColor={COLORS.PRIMARY}
                        onValueChange={toggleSwitch}
                        value={isEnabled} />
                        {/* {console.log(isEnabled)} */}
                </View>
                <TouchableOpacity style={settingStyle.clickSettings} onPress={() => alert("Privary settings")}>
                    <Text>Privacy and Security</Text>
                    <AntDesign name='right' size={20} color={COLORS.BLACK} />
                </TouchableOpacity>

                <TouchableOpacity style={settingStyle.clickSettings} onPress={() => alert("add or remove profile info")}>
                    <Text>Change Profile information</Text>
                    <AntDesign name='right' size={20} color={COLORS.BLACK} />
                </TouchableOpacity>

                <TouchableOpacity style={settingStyle.clickSettings}>
                    <Text>About</Text>
                    <AntDesign name='right' size={20} color={COLORS.BLACK} />
                </TouchableOpacity>

                <TouchableOpacity style={settingStyle.clickSettings}>
                    <Text>FAQ</Text>
                    <AntDesign name='right' size={20} color={COLORS.BLACK} />
                </TouchableOpacity>
            </View>
            <StatusBar barStyle="light-content" />
        </View>
    )
}