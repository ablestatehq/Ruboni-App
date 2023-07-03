import { AntDesign } from '@expo/vector-icons';
import {
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Image
} from 'react-native';

import { COLORS } from '../../../constants/constants';
import { AccommodationStyle } from './style';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useContext, useState } from 'react';
import Btn from '../../helper/Btn';
import { tours } from '../../../dataTours/tours'
import appwriteContext from '../../contexts/appwriteContext';

export default function MakeReservation({navigation, route}){
    // const { Title, image,description, price, screenName } = route.params;
    // const [checkin, setCheckIn] = useState(new Date());
    // const [checkout, setCheckout] = useState(new Date());
    // const [ name, setName ] = useState('');
    // const [ email, setEmail ] = useState('');
    // const [ phonenumber, setPhonenumber ] = useState('');
    // const { isLoggedIn } = useContext(appwriteContext);
    

    // const showDate = (currentMode, state) => {
    //     DateTimePickerAndroid.open({
    //         value:checkin,
    //         onChange: (event, seletedDate) => {
    //             const currentDate = seletedDate;
    //             if(state === "checkin"){
    //                 setCheckIn(currentDate);
    //             }else{
    //                 setCheckout(currentDate);
    //             }
    //         },
    //         mode:currentMode,
    //         is24Hour:true,
    //     });
    // }

    // const showDatePicker = (state) => {
    //     showDate('date', state);
    // }

    // // handle input changes.
    // const handleName = (text)=>{
    //     setName(text);
    // }

    // const handleEmail = (text)=>{
    //     setEmail(text);
    // }

    // const handlePhone = (text)=>{
    //     setPhonenumber(text);
    // }
    // return(
    //     <View style={AccommodationStyle.mContainer}>
    //         <View style={AccommodationStyle.mHeader}>
    //             <AntDesign name='left' size={32} color={COLORS.WHITE} onPress={() => {
    //                 // console.log(screenName)
    //                 navigation.navigate(!screenName ? "Dashboard" : screenName,{
    //                     Title:Title,
    //                     image:image,
    //                     description:description,
    //                     price:price,
    //                 });
    //             }}/>
    //             <Text style={AccommodationStyle.mHText}>Make Reservation</Text>
    //         </View>
    //         <ScrollView showsVerticalScrollIndicator={false}>
    //             <View style={AccommodationStyle.mContent}>
    //                 <TextInput style={AccommodationStyle.mTextInput} onChangeText={text => handleName(text)} placeholder='Your name'/>
    //                 <TextInput style={AccommodationStyle.mTextInput} onChangeText={text => handleEmail(text)} placeholder='Your email'/>
    //                 <TextInput style={AccommodationStyle.mTextInput} onChangeText={text => handlePhone(text)} placeholder='Your number'/>
    //                 <TextInput style={AccommodationStyle.mTextInput} onChangeText={text => handleName(text)} placeholder='Number of adults'/>
    //                 <TextInput style={AccommodationStyle.mTextInput} onChangeText={text => handleEmail(text)} placeholder='Number of children'/>
    //                 <TextInput style={AccommodationStyle.mTextInput} onChangeText={text => handlePhone(text)} placeholder='Country'/>
    //                 <Text>{checkin.toLocaleDateString()}</Text>
    //                 <TouchableOpacity onPress={() => showDatePicker('checkin')} style={AccommodationStyle.mDatePicker}>
    //                     <Text style={AccommodationStyle.mText}>Check-in date</Text>
    //                 </TouchableOpacity>
    //                 <Text>{checkout.toLocaleDateString()}</Text>
    //                 <TouchableOpacity onPress={() => showDatePicker('checkout')} style={AccommodationStyle.mDatePicker}>
    //                     <Text style={AccommodationStyle.mText}>Check-out date</Text>
    //                 </TouchableOpacity>

    //                 {/* List of rooms  */}
    //                 <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
    //                     <Text>Accommodation</Text>
    //                     <TouchableOpacity onPress={()=>{
    //                         navigation.navigate('ListAccommodation', {
    //                             screenName: "MakeReservation"
    //                         });
    //                     }}>
    //                         <Text style={{color:COLORS.PRIMARY}}>Explore more</Text>
    //                     </TouchableOpacity>
    //                 </View>
    //                 <View style={AccommodationStyle.mSection}>
    //                     <FlatList
    //                     data={tours}
    //                     renderItem={({item}) => 
    //                         <View>
    //                             <Image source={item.image} style={{width:100,height:50,margin:10,}} />
    //                             <Text>{item.price}</Text>
    //                         </View>
    //                     }
    //                     horizontal/>
    //                 </View>
    //                 {/* List of activities  */}
    //                 <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
    //                     <Text>Acctivities</Text>
    //                     <TouchableOpacity onPress={()=>{
    //                         navigation.navigate('ListActivities',{
    //                             Title, image,description, price,
    //                             screenName:"MakeReservation"
    //                         });
    //                     }}>
    //                         <Text style={{color:COLORS.PRIMARY}}>Explore more</Text>
    //                     </TouchableOpacity>
    //                 </View>
    //                 <View style={AccommodationStyle.mSection}>
    //                     <FlatList
    //                         data={tours}
    //                         renderItem={({item}) => 
    //                             <View>
    //                                 <Image source={item.image} style={{width:100,height:50,margin:10,}} />
    //                                 <Text>{item.price}</Text>
    //                             </View>
    //                         }
    //                         horizontal/>
    //                 </View>
    //                 <Btn 
    //                 BtnText="Proceed" 
    //                 BtnStyle={AccommodationStyle.mProceed} 
    //                 BtnTextStyle={AccommodationStyle.mbtnText}
    //                 Onpress={()=>{
    //                     if(isLoggedIn){
    //                         // TODO: navigate to the payment page to book the room.
    //                         alert(`${name} and ${email} and ${phonenumber} ${checkin.toLocaleDateString()} ${checkout.toLocaleDateString()}`)
    //                     }else{
    //                         alert("Not logged in, first login.")
    //                         navigation.nagivate("Login",{
    //                             screenName: "MakeReservation"
    //                         })
    //                     }
    //                 }}
    //                 />
    //             </View>
    //         </ScrollView>
    //         <StatusBar style="auto" />
    //     </View>
    // )
}