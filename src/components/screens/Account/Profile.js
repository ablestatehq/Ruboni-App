import {
    SafeAreaView,
    View,
    Text,
    Animated,
} from 'react-native';
import Btn from '../../helper/Btn';
import { profileStyle } from './style';
import Dialog from '../../helper/dialog';
import { useContext, useState } from 'react'
import appwriteContext from '../../contexts/appwriteContext';
import { clearStorage } from '../../../utils/cartFunctions';
import { Avatar } from 'react-native-paper';
import { COLORS, DIMENS, userBucket } from '../../../constants/constants';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function Profile({navigation}) {
    const HEADER_HEIGHT = DIMENS.SCREENHEIGHT*(3/10);
    const [isVisible, setIsVisible] = useState(false);
    const { appwrite, isLoggedIn, setIsLoggedIn, user } = useContext(appwriteContext);
    const [ isEdit, setIsEdit ] = useState(false);
    const [ scrollY, setScrollY ] = useState(new Animated.Value(0));
    const [ profile, setProfile ] = useState(null)

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [HEADER_HEIGHT, 0],
        extrapolate: 'clamp'
    });

    
    const { state, setState } = useState({
        fname:'',
        lname: '',
        phone:'',
        country: '',
        email: '',
    })

    // Event handlers here
    const toggleDialogVisibility = () => {
        setIsVisible(!isVisible);
    }

    const pickImage = async () => {
        let results = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [4,3],
            quality: 1,
            allowsMultipleSelection:true
        });

        // console.log("Bucket",userBucket);
        if(!results.canceled){
            console.log(results.assets[0])
             appwrite.storeFiles(results.assets[0])
            .then(data => {
                setProfile(results.assets[0].uri);
                console.log(data)
            }).catch(error => {
                console.log("pickImage() -- storeFiles() -- ",error);
            })
        }else{
            console.log("Canceled")
        }

        // console.log(profile)
    }
    const pressYes = () => {
        appwrite.logout().then(res => { 
            clearStorage("accessToken");
        });
        setIsLoggedIn(false);
        setIsVisible(!isVisible)
    }
    
    const pressNo = () => {
        setIsVisible(!isVisible);
    }

    const toggleEdit = () => {
        setIsEdit(!isEdit);
    }
    // Event handlers end here.

    return(
        <SafeAreaView style={profileStyle.pContainer}>
                <View style={profileStyle.avatarIcon}>
                    {
                        isLoggedIn ? (
                            <View>
                                {
                                    profile ?( <Avatar.Image 
                                    size={100} 
                                    source={{uri: profile}}
                                    onTouchStart={pickImage}
                                    /> ): 
                                    <Avatar.Text 
                                    size={100} 
                                    label={user.firstName[0] + "" + user.lastName[0]} 
                                    labelStyle={profileStyle.lText}
                                    onTouchStart={pickImage}/> 
                                }
                                {/* <Image source={{uri: profile}} style={{width: 100, height: 100}}/> */}
                            </View>
                        ): (
                            <View>
                                <Avatar.Text 
                                size={100} 
                                label='gu' 
                                labelStyle={profileStyle.lText}
                                onTouchStart={() => {
                                    alert("You have no account")
                                }}/>
                            </View>
                        )
                    }
                    {
                        isLoggedIn ? (
                            <View style={profileStyle.pText}>
                                <Text>{user.firstName + " " + user.lastName}</Text> 
                                <Text>{user.email}</Text>
                            </View>
                        ): (
                            <View style={profileStyle.pText}>
                                <Text>guest_user1290</Text>
                                <Text>guest_user1290@gmail.com</Text>
                            </View>
                        )
                    }
                </View>
                <View style={profileStyle.pcardBtn}>
                    <View style={profileStyle.ptransparentBtn}>
                        <Text>Privacy</Text>
                        <AntDesign name='right' size={20} color={COLORS.BLACK}  onPress={() => {
                            alert("It works")
                        }}/>
                    </View>

                    <View style={profileStyle.ptransparentBtn}>
                        <Text>Trip history</Text>
                        <AntDesign name='right' size={20} color={COLORS.BLACK}  onPress={() => {
                            // alert("It works")
                            navigation.navigate('Memory')
                        }}/>
                    </View>

                    <View style={profileStyle.ptransparentBtn}>
                        <Text>Help & Support</Text>
                        <AntDesign name='right' size={20} color={COLORS.BLACK}  onPress={() => {
                            alert("It works")
                        }}/>
                    </View>

                    <View style={profileStyle.ptransparentBtn}>
                        <Text>Settings</Text>
                        <AntDesign name='right' size={20} color={COLORS.BLACK}  onPress={() => {
                            // alert("It works")
                            navigation.navigate('Settings')
                        }}/>
                    </View>

                    <View style={profileStyle.ptransparentBtn}>
                        <Text>Invite a friend</Text>
                        <AntDesign name='right' size={20} color={COLORS.BLACK}  onPress={() => {
                            alert("It works")
                        }}/>
                    </View>
                    <Btn 
                        BtnStyle={profileStyle.plogout}
                        BtnText={isLoggedIn ? "Log Out" : "Log In"}
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
                    <Dialog title="Log out" message="Do you really want to logout" isV={isVisible} yesPressed={pressYes} noPressed={pressNo}/>
                </View>
        </SafeAreaView>
    )
}