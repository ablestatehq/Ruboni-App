import { View } from "react-native";
import { ActivityStyle } from "./style";

export default function Packages() {
    return(
        <View>
            <View style={ActivityStyle}>
                <AntDesign name="left" size={24} color="white" onPress={() => alert("Going back to the dashboard")}/>
                <Text>Accommodations</Text>
            </View>
            <View>
                
            </View>
        </View>
    )
}