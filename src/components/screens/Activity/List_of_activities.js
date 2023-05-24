import { View, Text, FlatList, StatusBar } from "react-native";
import { ActivityStyle } from "./style";
import { tours } from "../../../dataTours/tours";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../contants/contants";
import ItemCard from "../../helper/ItemCard";

export default function Packages() {
    const data = tours
    // console.log(data)
    return(
        <View>
            <View style={ActivityStyle.listItemsView}>
                <AntDesign name="left" size={24} color={COLORS.WHITE} onPress={() => alert("Going back to the dashboard")}/>
                <Text style={ActivityStyle.listHeaderText}>Tour Packages</Text>
            </View>
            <View style={ActivityStyle.list}>
                {/* Here, list the accommodations available here  */}
                {/* <View>
                    User can select the type of room from here.
                </View> */}
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