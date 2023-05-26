import { Text, View, StatusBar, ImageBackground, ScrollView, FlatList, Image } from "react-native";
import { AccommodationStyle } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../contants/contants";
import Btn from "../../helper/Btn";
import { tours } from "../../../dataTours/tours";

export default function Accommodation({navigation, route}){
    
    const {Title, image, description, price} = route.params

    return(
        <View style={AccommodationStyle.aContainer}>
            <View style={AccommodationStyle.header}>
               <ImageBackground source={image} resizeMode="cover" style={AccommodationStyle.bkheader}>
                     {/* This section should have a background image. that is responsive  */}
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <AntDesign name="left" size={32} color={COLORS.PRIMARY} style={AccommodationStyle.backBtn} onPress={() => {
                            navigation.navigate('Home')
                        }}/>
                        <Text style={{fontSize:25, color:COLORS.PRIMARY, textAlign:'center',marginLeft:50}}>Details</Text>
                    </View>
               </ImageBackground>
            </View>
            <View style={AccommodationStyle.zindexView}>
                <ScrollView contentContainerStyle={AccommodationStyle.accScroll}>
                    <View>
                    {/* <Text>{props.route.itemData.title}</Text> */}
                    <Text>{Title}</Text>
                    </View>
                    <View style={AccommodationStyle.adetail}>
                        <Text>
                            {description}
                        </Text>
                    </View>
                    <View style={AccommodationStyle.selectPackage}>
                        {/* This list show show the images of the hotel  */}
                        <FlatList
                            data={tours}
                            renderItem={({item}) => {
                                return <Image source={item.image} style={AccommodationStyle.showImg} />
                            }}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={AccommodationStyle.aBuy}>
                        <Text style={{borderWidth:1,padding:3, borderColor:COLORS.PRIMARY, color:COLORS.PRIMARY}}>$400</Text>
                        <Btn BtnStyle={AccommodationStyle.bookBtn} 
                        Onpress={()=>{
                            navigation.navigate('MakeReservation', {
                                Title:Title,
                                price:price,
                                image:image
                            });
                        }}
                        BtnTextStyle={AccommodationStyle.btnText}
                        BtnText="Book now"/>
                    </View>
                </ScrollView>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}