import {
    View,
    Text,
    StatusBar,
    FlatList,
    Image
} from 'react-native';
import { memoryStyle } from './style';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../../../constants/constants';
import { tours } from '../../../dataTours/tours';
import Trips from '../Trips/Trips';
import { useContext, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import appwriteContext from '../../contexts/appwriteContext';

export default function Memory({navigation}){
    const [ image, setImage ] = useState(null);
    const { isLoggedIn, user } = useContext(appwriteContext);
    const pickImage = async ()=>{
        let results = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [4,3],
            quality: 1,
            allowsMultipleSelection:true
        });

        // console.log(results);

        if(!results.canceled){
            setImage(results.assets[0].uri);
        }else{
            // console.log("Canceled")
        }
    }
    return(
        <View style={memoryStyle.mContainer}>
            <View style={memoryStyle.mheader}>
                <AntDesign name='left' size={32} color={COLORS.WHITE} onPress={() => navigation.navigate(isLoggedIn ? user.firstName : "Guest")}/>
                <Text style={memoryStyle.mHeaderText}>Trip History</Text>
                <AntDesign name='plus' size={32} color={COLORS.WHITE} onPress={pickImage} />
            </View>
            <View style={memoryStyle.mContent}>
                <View style={memoryStyle.mImage}>
                    {/* This is a list images of her previous trips  */}
                    <Text>My photos</Text>
                    <FlatList 
                        data={tours}
                        renderItem={({item}) => <Image source={item.image} style={memoryStyle.imges} />}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        />
                </View>
                {/* <View> */}
                {/* List the previous trips  */}
                <View style={memoryStyle.previous}>
                    <Text>Previous trips</Text>
                    <FlatList 
                    data={tours}
                    renderItem={({item}) => <Trips title={item.Title} image={item.image} time="19:29pm" period={{start: "20/07/2023", end: "27/07/2023"}} description={item.description} OnPress={() => {
                        alert("works")
                    }}/>}
                    showsVerticalScrollIndicator={false}
                    />
                </View>
                {/* </View> */}
            </View>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.PRIMARY}/>
        </View>
    )
}