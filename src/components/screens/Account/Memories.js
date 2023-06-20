import {
    View,
    Text,
    StatusBar,
    FlatList,
    Image
} from 'react-native';
import { profileStyle } from './style';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../../../constants/constants';
import { tours } from '../../../dataTours/tours';
import Trips from '../Trips/Trips';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function Memory({navigation}){
    const [ image, setImage ] = useState(null);

    const pickImage = async ()=>{
        let results = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4,3],
            quality: 1,
            allowsMultipleSelection:true
        });

        console.log(results);

        if(!results.canceled){
            setImage(results.assets[0].uri);
        }else{
            console.log("Canceled")
        }
    }
    return(
        <View style={profileStyle.mContainer}>
            <View style={profileStyle.mheader}>
                <AntDesign name='left' size={32} color={COLORS.WHITE} onPress={() => navigation.navigate('Profile')}/>
                <Text style={profileStyle.mHeaderText}>Memories</Text>
                <AntDesign name='plus' size={32} color={COLORS.WHITE} onPress={pickImage} />
            </View>
            <View style={profileStyle.mContent}>
                <View style={profileStyle.mImage}>
                    {/* This is a list images of her previous trips  */}
                    <Text>My photos</Text>
                    <FlatList 
                        data={tours}
                        renderItem={({item}) => <Image source={item.image} style={profileStyle.imges} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        />
                </View>
                {/* <View> */}
                {/* List the previous trips  */}
                <FlatList 
                data={tours}
                renderItem={({item}) => <Trips title={item.Title} description={item.description}/>}
                showsVerticalScrollIndicator={false}
                />
                {/* </View> */}
            </View>
            <StatusBar barStyle="light-content"/>
        </View>
    )
}