import { View, Text, FlatList, StatusBar } from "react-native";
import { ActivityStyle } from "./style";
import { tours } from "../../../dataTours/tours";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../constants/constants";
import ItemCard from "../../helper/ItemCard";

export default function Packages({navigation, route}){
    const data = tours
    const { Title, image,description, price, screenName } = route.params;
    return(
        <View>
            <View style={ActivityStyle.listItemsView}>
                <AntDesign name="left" size={24} color={COLORS.WHITE} onPress={() => {
                    navigation.navigate(screenName, {
                        Title, image,description, price, screenName
                    })
                }}/>
                <Text style={ActivityStyle.listHeaderText}>Tour Packages</Text>
            </View>
            <View style={ActivityStyle.list}>
                {/* Here, list the accommodations available here  */}
                <FlatList 
                    style={ActivityStyle.listItems}
                    data={data}
                    renderItem={({item}) => {
                       return <ItemCard 
                       ItemCard={ActivityStyle.itemCard}
                       touchStyle={ActivityStyle.touchStyle}
                       url={item.image}
                       imgStyle={ActivityStyle.imgStyle}
                       itemDes={ActivityStyle.itemDes}
                       description={item.description}
                       itemFooter={ActivityStyle.itemFooter}
                       itemF={ActivityStyle.itemF}
                       price={item.price} />
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <StatusBar barStyle='light-content'/>
        </View>
    )
}