import {
    SafeAreaView,
    View,
    Text,
    Modal,
    TextInput
} from 'react-native';


import Btn from '../../helper/Btn';
import { profileStyle } from './style';
import Dialog from '../../helper/dialog';
import { useContext, useState } from 'react'
import appwriteContext from '../../contexts/appwriteContext';
import { clearStorage } from '../../../utils/cartFunctions';
import { Avatar } from 'react-native-paper';
import { COLORS, databaseId, uCollection } from '../../../constants/constants';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { checkSpace, saveFile } from '../../../utils/functions';


export default function Profile({navigation}){

    const [isVisible, setIsVisible] = useState(false);
    const { appwrite, isLoggedIn, setIsLoggedIn, user, profile, setProfile } = useContext(appwriteContext);
    const [ change, setChange ] = useState(false);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');

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

        if(!results.canceled){
            saveFile(results.assets[0].uri, "profilePicture").then(res => {
                // console.log("SAVED WHAT I WANTED")
                setProfile(results.assets[0].uri);
            }).catch(error => {
                console.log("saveFile",error)
            })
        }else{
            console.log("Canceled")
        }
    }
    const pressYes = () => {
        appwrite.logout().then(res => { 
            clearStorage("accessToken");
            setIsLoggedIn(false);
            setIsVisible(!isVisible)
        });
    }
    
    const pressNo = () => {
        setIsVisible(!isVisible);
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
                        <Text>Change Profile Information</Text>
                        <AntDesign name='right' size={20} color={COLORS.BLACK}  onPress={() => {
                            // alert("It works")
                            setChange(true)
                        }}/>
                        <Modal visible={change} animationType='fade' transparent={true}>
                        <View style={{        
                            flex:1,
                            alignItems:'center',
                            justifyContent:'center',
                            }}>
                                <Text>Change Your Profile Information</Text>
                                <View style={{
                                            width:'80%',
                                            elevation:24,
                                            backgroundColor:COLORS.PRIMARY_1,
                                            padding:20}}>
                                    <TextInput
                                    placeholder="Change your name"
                                    style={{
                                        borderWidth:1,
                                        borderColor:COLORS.PRIMARY,
                                        padding:5,
                                    }}
                                    onChangeText={text => setName(text)}
                                    />

                                    <TextInput 
                                    placeholder='Change your email'
                                    style={{
                                        borderWidth:1,
                                        borderColor:COLORS.PRIMARY,
                                        padding:5,
                                    }}
                                    keyboardType='email-address'
                                    onChangeText={text => setEmail(text)}/>

                                    <TextInput 
                                    placeholder='phone number' 
                                    style={{
                                        borderWidth:1,
                                        borderColor:COLORS.PRIMARY,
                                        padding:5,
                                    }}
                                    keyboardType='phone-pad'
                                    onChangeText={text => setPhone(text)}
                                    />

                                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                                        <Btn BtnStyle={{
                                            marginTop:12,
                                            marginRight:8,
                                            }}
                                            BtnText="Yes"
                                            Onpress={() => {
                                                let id;
                                                appwrite.list_documents(databaseId, uCollection, user).then(res => {
                                                    id = res.documents[0]["$id"];
                                                    if(checkSpace(name)){
                                                        const [ firstName, lastName ] = name.split(" ")
                                                        appwrite.updateDocument(databaseId, uCollection, id, {
                                                            firstName,
                                                            lastName,
                                                            email,
                                                            phone
                                                        }).then(response => {
                                                            // make sure to update the account section.
                                                        })
                                                    }else{
                                                        appwrite.updateDocument()
                                                    }
                                                }).catch(error => {
                                                    console.log("Error ", error)
                                                })
                                            }}
                                            />

                                        <Btn BtnStyle={{
                                            marginTop:12,
                                            marginRight:8,
                                            }}
                                            BtnText="No"
                                            Onpress={() => {
                                                setChange(false)
                                            }}/>
                                    </View>
                                </View>
                        </View>
                    </Modal>
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