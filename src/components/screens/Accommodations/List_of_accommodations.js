import { FlatList, StatusBar, Text, View } from "react-native";
import { AccommodationStyle } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { tours } from '../../../dataTours/tours'
import { COLORS } from "../../contants/contants";
import ItemCard from '../../helper/ItemCard'

export default function ListAccommodation() {
    const data = tours
    // console.log(data)
    return(
        <View>
            <View style={AccommodationStyle.listItemsView}>
                <AntDesign name="left" size={24} color={COLORS.WHITE} onPress={() => alert("Going back to the dashboard")}/>
                <Text style={AccommodationStyle.listHeaderText}>Hotels</Text>
            </View>
            <View style={AccommodationStyle.list}>
                {/* Here, list the accommodations available here  */}
                {/* <View>
                    User can select the type of room from here.
                </View> */}
                <FlatList 
                    style={AccommodationStyle.listItems}
                    data={data}
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
            <StatusBar barStyle='light-content'/>
        </View>
    )
}