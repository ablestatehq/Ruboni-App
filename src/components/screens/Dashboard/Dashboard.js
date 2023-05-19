import { ScrollView, StatusBar, TextInput, View } from "react-native";
import { DashboardStyle } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../contants/contants";

function Dashboard() {
    return ( 
        <View style={DashboardStyle.container}>
            <View style={DashboardStyle.searchView}>
                <TextInput placeholder="Where do you want to go?">
                </TextInput>
                <Ionicons name="search-outline" size={20} color={COLORS.PRIMARY} onPress={() => alert("Search now")}/>
            </View>
            <View style={DashboardStyle.sourvenirsView}>
                <ScrollView horizontal>

                </ScrollView>
            </View>
            <View style={DashboardStyle.accomView}>
                <ScrollView horizontal>
                
                </ScrollView>
            </View>
            <View style={DashboardStyle.hotelsView}>
                <ScrollView horizontal>
                    
                </ScrollView>
            </View>
            <StatusBar style="auto" />
        </View>
     );
}

export default Dashboard;