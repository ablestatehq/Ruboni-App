import { ActivityStyle } from "./style";
import { 
    View,
    Text,
    ScrollView,
    ImageBackground,
    StatusBar
} from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../constants/constants";
import Btn from "../../helper/Btn";
import Ratings from "../../helper/rating";

export default function ViewActivity({navigation, route}){
    // const image = props.route.params.itemData.url;
    const {Title, image, description, price} = route.params
    return(
        <View style={ActivityStyle.container}>
            <View style={ActivityStyle.header}>
               <ImageBackground source={image} resizeMode="cover" style={ActivityStyle.bkheader}>
                     {/* This section should have a background image. that is responsive  */}
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <AntDesign name="left" size={32} color={COLORS.WHITE_1} style={ActivityStyle.backBtn} onPress={() => {
                            navigation.navigate('Dashboard')
                        }}/>
                        <Text style={{fontSize:25, color:COLORS.WHITE, textAlign:'center', marginLeft:20}}>Package Overview</Text>
                    </View>
               </ImageBackground>
            </View>
            <View style={ActivityStyle.zindexView}>
                <ScrollView contentContainerStyle={ActivityStyle.pscroll}>
                    <Text>{Title}</Text>
                    <View style={ActivityStyle.pdetail}>
                        <Text>
                            {description}
                        </Text>
                    </View>
                    <View style={ActivityStyle.selectPackage}>
                        <Text style={{fontWeight:'bold'}}>Good to know section</Text>
                        <View>
                            <Text>Food is included on the package: Breakfast and lunch</Text>
                            <Text>Accommodation is included</Text>
                            <Text>Transport is part of the package</Text>
                            <Text>Nature walk</Text>
                        </View>
                        {/* This section should allow the user to remove things  */}
                    </View>
                    <View style={ActivityStyle.aMap}>
                        <Text>Where to go section.</Text>
                        {/* This section should include a map  */}
                    </View>
                    <View style={ActivityStyle.pbuy}>
                        <Text style={{borderWidth:1,padding:3, borderColor:COLORS.PRIMARY, color:COLORS.PRIMARY}}>$400</Text>
                        <Btn BtnStyle={ActivityStyle.bookBtn} 
                        Onpress={()=>navigation.navigate('TripCreation', {
                            Title:Title,
                            image:image,
                            description: description,
                            price: price
                        })}
                        BtnTextStyle={ActivityStyle.btnText}
                        BtnText="Book now"/>
                    </View>
                    <View style={{flexDirection:"row", width:'100%', justifyContent:"space-between"}}>
                        <Text>Rate us</Text>
                        <Ratings />
                    </View>
                </ScrollView>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}