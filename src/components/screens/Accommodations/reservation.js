import { AntDesign } from '@expo/vector-icons';
import {
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { COLORS } from '../../contants/contants';
import { AccommodationStyle } from './style';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useState } from 'react';
import Btn from '../../helper/Btn';

export default function MakeReservation(){
    
    const [date, setDate] = useState(new Date());
    const onChange = (event, seletedDate) => {
        const currentDate = seletedDate;
        setDate(currentDate);
    }

    const showDate = (currentMode) => {
        DateTimePickerAndroid.open({
            value:date,
            onChange,
            mode:currentMode,
            is24Hour:true,
        });
    }

    const showDatePicker = () => {
        showDate('date');
    }
    return(
        <ScrollView style={AccommodationStyle.mContainer}>
            <View style={AccommodationStyle.mHeader}>
                <AntDesign name='left' size={32} color={COLORS.WHITE} onPress={() => alert('It works')}/>
                <Text style={AccommodationStyle.mHText}>Make Reservation</Text>
            </View>
            <View style={AccommodationStyle.mContent}>
                <TextInput style={AccommodationStyle.mTextInput}/>
                <TextInput style={AccommodationStyle.mTextInput}/>
                <TextInput style={AccommodationStyle.mTextInput}/>
                <TouchableOpacity onPress={showDatePicker} style={AccommodationStyle.mDatePicker}>
                    <Text style={AccommodationStyle.mText}>Check-in date</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showDatePicker} style={AccommodationStyle.mDatePicker}>
                    <Text style={AccommodationStyle.mText}>Check-out date</Text>
                </TouchableOpacity>

                <Text>Activities</Text>
                <View style={AccommodationStyle.mSection}>

                </View>
                <Text>Accommodations</Text>
                <View style={AccommodationStyle.mSection}>

                </View>
                <Btn BtnText="Proceed" BtnStyle={AccommodationStyle.mProceed} BtnTextStyle={AccommodationStyle.mbtnText}/>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    )
}