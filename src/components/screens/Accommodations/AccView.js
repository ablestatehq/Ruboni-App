import { Text, View, StatusBar, ImageBackground, ScrollView } from "react-native";
import { AccommodationStyle } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../contants/contants";
import Btn from "../../helper/Btn";

export default function Accommodation(props){
    // const image = props.route.params.itemData.url;
    return(
        <View style={AccommodationStyle.aContainer}>
            <View style={AccommodationStyle.header}>
               <ImageBackground source={'image'} resizeMode="contain" style={AccommodationStyle.bkheader}>
                     {/* This section should have a background image. that is responsive  */}
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <AntDesign name="left" size={32} color={COLORS.PRIMARY} style={AccommodationStyle.backBtn} onPress={() => alert('it has to take me back to the first page')}/>
                        <Text style={{fontSize:25, color:COLORS.WHITE, textAlign:'center'}}>Details</Text>
                    </View>
               </ImageBackground>
            </View>
            <View style={AccommodationStyle.zindexView}>
                <ScrollView contentContainerStyle={AccommodationStyle.accScroll}>
                    {/* <View st> */}
                    {/* <Text>{props.route.itemData.title}</Text> */}
                    <Text>title</Text>
                    {/* </View> */}
                    <View style={AccommodationStyle.adetail}>
                        <Text>
                            Detailed description of the trip
                        </Text>
                    </View>
                    <View style={AccommodationStyle.selectPackage}>
                        <Text>Good to know section</Text>
                        {/* This section should allow the user to remove things  */}
                    </View>
                    <View style={AccommodationStyle.aMap}>
                        <Text>
                            Where to go section.
                        </Text>
                        {/* This section should include a map  */}
                    </View>
                    <View style={AccommodationStyle.aBuy}>
                        <Text style={{borderWidth:1,padding:3, borderColor:COLORS.PRIMARY, color:COLORS.PRIMARY}}>$400</Text>
                        <Btn BtnStyle={AccommodationStyle.bookBtn} 
                        Onpress={()=>alert('it works')}
                        BtnTextStyle={AccommodationStyle.btnText}
                        BtnText="Book now"/>
                    </View>
                </ScrollView>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}