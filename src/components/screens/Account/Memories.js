import {
    View,
    Text,
    StatusBar,
    FlatList,
    Image
} from 'react-native';
import { profileStyle } from './style';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../../contants/contants';
import { tours } from '../../../dataTours/tours';
import Trips from '../../helper/Trips';

export default function Memory(props){
    return(
        <View style={profileStyle.mContainer}>
            <View style={profileStyle.mheader}>
                <AntDesign name='left' size={32} color={COLORS.WHITE} onPress={() => props.navigation.navigate('Account')}/>
                <Text style={profileStyle.mHeaderText}>Memories</Text>
                <AntDesign name='plus' size={32} color={COLORS.WHITE} onPress={() => alert('add new images')} />
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