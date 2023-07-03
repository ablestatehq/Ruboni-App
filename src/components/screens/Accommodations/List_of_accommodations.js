import { FlatList, StatusBar, Text, View } from "react-native";
import { AccommodationStyle } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../constants/constants";
import ItemCard from '../../helper/ItemCard'
import { rooms } from "../../../dataTours/rooms";

export default function ListAccommodation({navigation, route}) {
    // const data = tours
    const { Title, image,description, price, screenName } = route.params;
    return(
        <View>
            <View style={AccommodationStyle.listItemsView}>
                <AntDesign name="left" size={20} color={COLORS.WHITE} onPress={() => {
                    navigation.navigate(screenName,{
                        Title, image,description, price, screenName
                    });
                }}/>
                <Text style={AccommodationStyle.listHeaderText}>Hotels</Text>
            </View>
            <View style={AccommodationStyle.list}>
                {/* Here, list the accommodations available here  */}
                {/* <View>
                    User can select the type of room from here.
                </View> */}
                <FlatList 
                    style={AccommodationStyle.listItems}
                    data={rooms}
                    renderItem={({item}) => {
                       return <ItemCard
                       ItemCard={AccommodationStyle.itemCard}
                       touchStyle={AccommodationStyle.touchStyle}
                       url={item.image}
                       imgStyle={AccommodationStyle.imgStyle}
                       itemDes={AccommodationStyle.itemDes}
                       description={item.description}
                       itemFooter={AccommodationStyle.itemFooter}
                       itemF={AccommodationStyle.itemF}
                       price={item.price} />
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <StatusBar barStyle='light-content' backgroundColor={COLORS.PRIMARY}/>
        </View>
    )
}