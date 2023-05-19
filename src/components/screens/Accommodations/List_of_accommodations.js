import { Text, View } from "react-native";
import { AccommodationStyle } from "./style";
import { AntDesign } from "@expo/vector-icons";

export default function ListAccommodation() {
    return(
        <View>
            <View style={AccommodationStyle}>
                <AntDesign name="left" size={24} color="white" onPress={() => alert("Going back to the dashboard")}/>
                <Text>Accommodations</Text>
            </View>
            <View>
                {/* Here, list the accommodations available here  */}
            </View>
        </View>
    )
}