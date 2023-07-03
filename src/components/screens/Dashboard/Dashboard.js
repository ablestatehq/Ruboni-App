import { FlatList, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { DashboardStyle } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { COLORS, FONTS } from "../../../constants/constants";
import { tours } from "../../../dataTours/tours";
import ItemCard from "../../helper/ItemCard";
import { data } from "../../../dataTours/sourviners";
import { useContext, useEffect, useState } from "react";
import appwriteContext from "../../contexts/appwriteContext";
import { rooms } from "../../../dataTours/rooms";

function Dashboard({navigation}) {
    const [ isleft, setIsleft ] = useState(false);
    const [ searchWord, setSearchWord ] = useState('');
    const { appwrite, isLoggedIn, user, setUser, token } = useContext(appwriteContext);
    const sdocument = "";
    let products;
    let users;

    // fetch data
    useEffect(()=>{
        // Pick products data from the database
        // Pick the Package information from the database
        // console.log(user)
        // console.log(user)
        
    },[])

    // handling state change
    const handleIsLeft = (str)=>{
        if(str.length > 0){
            setIsleft(true)
        }else{
            setIsleft(false)
        }
    }

    const handleSearchBar = (text) =>{
        handleIsLeft(text)
        setSearchWord(text)
    }
    if(searchWord != ''){
        return (
            <View style={DashboardStyle.container}>
                <View style={DashboardStyle.searchView}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Ionicons name="search-outline" size={15} color={COLORS.PRIMARY} onPress={() => alert("Search now")}/>
                        <TextInput placeholder="Where do you want to go?" onChangeText={text => handleSearchBar(text)} value={searchWord}>
                        </TextInput>
                    </View>
                    {
                        isleft && <Entypo name="cross" size={24} color="black" onPress={() => {
                            setSearchWord('');
                            setIsleft(false)
                        }}/>
                    }
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={DashboardStyle.scroll}>
                <View style={DashboardStyle.sourvenirsView}>
                    <FlatList 
                        data={data}
                        renderItem={({item}) => 
                            <ItemCard
                                itemCard={DashboardStyle.itemView}
                                url={item.image}
                                imgStyle={DashboardStyle.itemStyle}
                                itemFooter={DashboardStyle.itemFooter}
                                itemDes={DashboardStyle.desStyle}
                                itemF={DashboardStyle.text}
                                description=""
                                price={item.price}
                                touchImage={() => {
                                    navigation.navigate('SourvinerView',{
                                        ...item
                                    })
                                }} />
                        } 
                        horizontal
                        showsHorizontalScrollIndicator={false} />
                </View>
                <Text style={{fontSize:20}}>Rooms/Hotels</Text>
                <View style={DashboardStyle.hotelsView}>
                    <FlatList
                        style={DashboardStyle.flatList}
                        data={rooms}
                        renderItem={({item}) => 
                                        <ItemCard 
                                        itemCard={DashboardStyle.cardView}
                                        url={item.image}
                                        // {...console.log(item.image)}
                                        imgStyle={DashboardStyle.cardImgView}
                                        itemDes={DashboardStyle.desStyle}
                                        description={item.description}
                                        itemFooter={DashboardStyle.cardFooter}
                                        itemF={DashboardStyle.text}
                                        price={item.price}
                                        touchImage={() => {
                                            // Navigate to the item.
                                            navigation.navigate('Accommodation',{
                                                ...item
                                            })
                                        }}
                                        touchStyle={DashboardStyle.touch}/>
                                    }
                        horizontal
                        showsHorizontalScrollIndicator={false}/>
                </View>
                <Text style={{fontSize:20}}>Recommanded Safaris</Text>
                <View style={DashboardStyle.hotelsView}>
                    <FlatList
                        style={DashboardStyle.flatList}
                        data={tours}
                        renderItem={({item}) => 
                                        <ItemCard 
                                        itemCard={DashboardStyle.cardView}
                                        url={item.image}
                                        imgStyle={DashboardStyle.cardImgView}
                                        itemDes={DashboardStyle.desStyle}
                                        description={item.description}
                                        itemFooter={DashboardStyle.cardFooter}
                                        itemF={DashboardStyle.text}
                                        price={item.price}
                                        touchImage={()=>{
                                            // alert("Hello")
                                            navigation.navigate('ViewPackage',{
                                                ...item
                                            })
                                        }}/>
                                    }
                        horizontal
                        showsHorizontalScrollIndicator={false}/>
                </View>
                <View style={DashboardStyle.seeAll}>
                    <TouchableOpacity style={DashboardStyle.Vendord} onPress={() => {
                        navigation.navigate('ListAccommodation', {
                            Title: '',
                            Image: '',
                            description: '',
                            price: '',
                            screenName: "Home"
                        })
                    }}>
                        <Text style={DashboardStyle.vText}>All vendors</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
        )
    }
    return ( 
        <View style={DashboardStyle.container}>
                <View style={DashboardStyle.searchView}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Ionicons name="search-outline" size={15} color={COLORS.PRIMARY} onPress={() => alert("Search now")}/>
                        <TextInput placeholder="Where do you want to go?" onChangeText={text => handleSearchBar(text)} value={searchWord}>
                        </TextInput>
                    </View>
                    {
                        isleft && <Entypo name="cross" size={24} color="black" onPress={() => {
                            setSearchWord('');
                            setIsleft(false)
                        }}/>
                    }
                </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={DashboardStyle.scroll}>
                <View style={DashboardStyle.sourvenirsView}>
                    <FlatList 
                        data={data}
                        renderItem={({item}) => 
                            <ItemCard
                                itemCard={DashboardStyle.itemView}
                                url={item.image}
                                imgStyle={DashboardStyle.itemStyle}
                                itemFooter={DashboardStyle.itemFooter}
                                itemDes={DashboardStyle.desStyle}
                                itemF={DashboardStyle.text}
                                description=""
                                price={item.price}
                                touchImage={() => {
                                    navigation.navigate('SourvinerView',{
                                        ...item
                                    })
                                }} />
                        } 
                        horizontal
                        showsHorizontalScrollIndicator={false} />
                </View>
                <Text style={{fontSize:20}}>Rooms/Hotels</Text>
                <View style={DashboardStyle.hotelsView}>
                    <FlatList
                        style={DashboardStyle.flatList}
                        data={rooms}
                        renderItem={({item}) => 
                                        <ItemCard 
                                        itemCard={DashboardStyle.cardView}
                                        url={item.image}
                                        // {...console.log(item.image)}
                                        imgStyle={DashboardStyle.cardImgView}
                                        itemDes={DashboardStyle.desStyle}
                                        description={item.description}
                                        itemFooter={DashboardStyle.cardFooter}
                                        itemF={DashboardStyle.text}
                                        price={item.price}
                                        touchImage={() => {
                                            // Navigate to the item.
                                            navigation.navigate('Accommodation',{
                                                ...item
                                            })
                                        }}
                                        touchStyle={DashboardStyle.touch}/>
                                    }
                        horizontal
                        showsHorizontalScrollIndicator={false}/>
                </View>
                <Text style={{fontSize:20}}>Recommanded Safaris</Text>
                <View style={DashboardStyle.hotelsView}>
                    <FlatList
                        style={DashboardStyle.flatList}
                        data={tours}
                        renderItem={({item}) => 
                                        <ItemCard 
                                        itemCard={DashboardStyle.cardView}
                                        url={item.image}
                                        imgStyle={DashboardStyle.cardImgView}
                                        itemDes={DashboardStyle.desStyle}
                                        description={item.description}
                                        itemFooter={DashboardStyle.cardFooter}
                                        itemF={DashboardStyle.text}
                                        price={item.price}
                                        touchImage={()=>{
                                            // alert("Hello")
                                            navigation.navigate('ViewPackage',{
                                                ...item
                                            })
                                        }}/>
                                    }
                        horizontal
                        showsHorizontalScrollIndicator={false}/>
                </View>
                <View style={DashboardStyle.seeAll}>
                    <TouchableOpacity style={DashboardStyle.Vendord} onPress={() => {
                        navigation.navigate('ListAccommodation', {
                            Title: '',
                            Image: '',
                            description: '',
                            price: '',
                            screenName: "Home"
                        })
                    }}>
                        <Text style={DashboardStyle.vText}>All vendors</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
     );
}

export default Dashboard;