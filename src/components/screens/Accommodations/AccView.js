import { Text, View, StatusBar, ImageBackground, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";
import { AccommodationStyle } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../constants/constants";
import Btn from "../../helper/Btn";
import { tours } from "../../../dataTours/tours";
import { useContext, useState } from "react";
import Ratings from "../../helper/rating";
import appwriteContext from "../../contexts/appwriteContext";

export default function Accommodation({navigation, route}){
    
    const {Title, image, description, price} = route.params;
    const [ starRating, setStarRating ] = useState(null)
    const { isLoggedIn } = useContext(appwriteContext);

    return(
        <View style={AccommodationStyle.aContainer}>
            <View style={AccommodationStyle.header}>
               <ImageBackground source={image} resizeMode="cover" style={AccommodationStyle.bkheader}>
                     {/* This section should have a background image. that is responsive  */}
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <AntDesign name="left" size={32} color={COLORS.WHITE} style={AccommodationStyle.backBtn} onPress={() => {
                            navigation.navigate('Home')
                        }}/>
                        <Text style={{fontSize:25, color:COLORS.WHITE, textAlign:'center',marginLeft:50}}>Details Overview</Text>
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
                            if(isLoggedIn){
                                navigation.navigate('TripCreation', {
                                    Title:Title,
                                    price:price,
                                    image:image,
                                    description:description,
                                    screenName: "Accommodation"
                                });
                            }else{
                                alert("Not logged in, first Login")
                            }
                        }}
                        BtnTextStyle={AccommodationStyle.btnText}
                        BtnText="Book now"
                        />
                    </View>

                    {/* Rating in React-native  */}
                    <View style={AccommodationStyle.rating}>
                        <Text>Rate us</Text>
                        <Ratings />
                    </View>
                </ScrollView>
            </View>
            <StatusBar style="auto" backgroundColor={COLORS.PRIMARY}/>
        </View>
    )
}