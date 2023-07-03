// Trip Name: A descriptive name for the trip.
// Destination: The location or locations the user plans to visit.
// Dates: The start and end dates of the trip.
// Itinerary: The planned activities or events during the trip.
// Accommodation: The place(s) where the user will stay.
// Budget: The estimated or allocated budget for the trip.
// Notes: Additional notes or special instructions for the trip.


import { useContext, useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import appwriteContext from "../contexts/appwriteContext";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/constants";

export default function TripCreation({navigation, route}){
    const { isLoggedIn } = useContext(appwriteContext);
    const [checkin, setCheckIn] = useState(new Date());
    const [checkout, setCheckout] = useState(new Date());
    const [activities, setActivities ] = useState([{...route.params}])
    const { Title, image, description, price } = route.params;
    const [ room, setRoom ] = useState([])

    const showDate = (currentMode, state) => {
        DateTimePickerAndroid.open({
            value:checkin,
            onChange: (event, seletedDate) => {
                const currentDate = seletedDate;
                if(state === "checkin"){
                    setCheckIn(currentDate);
                }else{
                    setCheckout(currentDate);
                }
            },
            mode:currentMode,
            is24Hour:true,
        });
    }

    const showDatePicker = (state) => {
        showDate('date', state);
    }

    return(
        <View style={styles.tripForm}>
            <View style={styles.tripFormHeader}>
                <AntDesign name="left" size={30} color={COLORS.WHITE} onPress={() => navigation.navigate('ViewPackage',{
                    ...route.params
                })}/>
                <View style={styles.tripLeft}>
                    <Text style={styles.text}>Plan your trip</Text>
                </View>
            </View>
            <View style={styles.content}>
                <TextInput placeholder="Trip name" editable={isLoggedIn ? false : true} style={styles.textInput}/>
                <TextInput placeholder="Trip destination" editable={isLoggedIn ? false : true} style={styles.textInput}/>
                <Text>{checkin.toLocaleDateString()}</Text>
                <TouchableOpacity onPress={() => showDatePicker('checkin')} style={styles.mDatePicker}>
                    <Text style={styles.mText}>Start date</Text>
                </TouchableOpacity>
                <Text>{checkout.toLocaleDateString()}</Text>
                <TouchableOpacity onPress={() => showDatePicker('checkout')} style={styles.mDatePicker}>
                    <Text style={styles.mText}>End date</Text>
                </TouchableOpacity>

                {/* If activity is not selected. ask the user to select the activities  */}
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Text>Selected Activities for your trip</Text>
                    <TouchableOpacity>
                        <Text>Add activity</Text>
                    </TouchableOpacity>
                </View>
                {
                    activities.length === 0 ? (
                        <View style={{...styles.list, alignItems:"center", justifyContent:"center"}}>
                            <TouchableOpacity onPress={() => {
                                // go to list of activities
                                navigation.navigate('ListActivities', {
                                    screenName: 'TripCreation'
                                })
                            }}>
                                <Text>Add activities</Text>
                            </TouchableOpacity>
                        </View>
                        ) : (   
                        <View style={styles.list}>
                            <FlatList 
                            data={activities}
                            renderItem={({item})=>(
                                <View style={{flexDirection:"row", justifyContent:"space-between", margin:5}}>
                                    <Text>{item.Title.slice(0,15)}</Text>
                                    <TouchableOpacity onPress={() => {
                                        // After removing the activity, make sure the activities state is also worked on
                                        alert("Remove Activity")
                                    }}>
                                        <Text>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            )}/>
                        </View>
                    )
                }

                   <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                    <Text>Select the hotel/room</Text>
                    <TouchableOpacity>
                        <Text>Add hotel</Text>
                    </TouchableOpacity>
                   </View>
                {
                    room.length === 0 ? (
                       <View style={{...styles.list, alignItems:"center", justifyContent:"center"}}>
                        <TouchableOpacity onPress={() => {
                             navigation.navigate('ListActivities', {
                                screenName: 'TripCreation',
                                Title, 
                                image, 
                                description, 
                                price
                            })
                        }}>
                            <Text>Add rooms to your trip</Text>
                        </TouchableOpacity>
                       </View>
                         ) : (
                        <View style={styles.list}>
                            <FlatList
                            data={room}
                            renderItem={({item}) => (
                                <View style={{flexDirection:"row", justifyContent:"space-between", margin:5}}>
                                    <Text>{item.name}</Text>
                                    <TouchableOpacity onPress={() => {
                                        // After removing the activity, make sure the activities state is also worked on
                                        alert("Remove Room")
                                    }}>
                                        <Text>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            )} />
                        </View>
                    )
                }
                <View style={{flexDirection: "row", }}>
                    {/* This is for the estimated budget  */}
                    <Text>Show total budget</Text>
                    <Text>$200</Text>
                </View>

                <TouchableOpacity onPress={() => {
                    navigation.navigate("Payment",{
                        screenName: "TripCreation"
                    })
                }}>
                    <Text>Pay 15% to book</Text>
                </TouchableOpacity>
            </View>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.PRIMARY} />
        </View>
    )
}

const styles = StyleSheet.create({
    tripFormHeader:{
        flexDirection: "row",
        padding:5,
        alignItems: "center",
        backgroundColor: COLORS.PRIMARY
    },

    content:{
        padding:10,
        alignItems:"center",
    },

    text:{
        fontSize:20,
        // marginLeft: 50,
        color:COLORS.WHITE,
        textAlign:"center"
    },

    mText:{
        color: COLORS.WHITE,
        textAlign: "center"
    },

    mDatePicker:{
        backgroundColor:COLORS.PRIMARY,
        width:'70%',
        padding:5,
        borderRadius:5
    },

    tripLeft:{
        width: '90%'
    },

    textInput:{
        borderWidth:1,
        borderColor: COLORS.PRIMARY,
        width:'70%',
        margin:10,
        borderRadius:5,
        padding:5,
    },

    list:{
        backgroundColor:COLORS.PRIMARY_1,
        height:'20%',
        width:'70%'
    }
});