import { FlatList, StatusBar, Text, TextInput, View } from "react-native";
import { DashboardStyle } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../contants/contants";
import { tours } from "../../../dataTours/tours";
import ItemCard from "../../helper/ItemCard";

function Dashboard({navigation}) {
    return ( 
        <View style={DashboardStyle.container}>
            <View style={DashboardStyle.searchView}>
                <TextInput placeholder="Where do you want to go?">
                </TextInput>
                <Ionicons name="search-outline" size={20} color={COLORS.PRIMARY} onPress={() => alert("Search now")}/>
            </View>
            <View style={DashboardStyle.sourvenirsView}>
                {/* <ScrollView horizontal>
                </ScrollView> */}
            </View>
            <Text>Rooms/Hotels</Text>
            <View style={DashboardStyle.accomView}>
                {/* <ScrollView horizontal>
                </ScrollView> */}
                <FlatList
                    style={DashboardStyle.flatList}
                    data={tours}
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
            <Text>Recommanded Safaris</Text>
            <View style={DashboardStyle.hotelsView}>
                {/* <ScrollView horizontal>
                </ScrollView> */}
                <FlatList
                    style={DashboardStyle.sourvenirsView}
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
                                    price={item.price}/>
                                }
                    horizontal
                    showsHorizontalScrollIndicator={false}/>
            </View>
            <StatusBar style="auto" />
        </View>
     );
}

export default Dashboard;