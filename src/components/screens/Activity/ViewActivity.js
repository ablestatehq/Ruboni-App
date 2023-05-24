import { ActivityStyle } from "./style";
import { 
    View,
    Text,
    ScrollView,
    ImageBackground,
    StatusBar
} from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../contants/contants";
import Btn from "../../helper/Btn";

export default function ViewActivity(props){
    // const image = props.route.params.itemData.url;
    return(
        <View style={ActivityStyle.container}>
            <View style={ActivityStyle.header}>
               <ImageBackground source={'image'} resizeMode="contain" style={ActivityStyle.bkheader}>
                     {/* This section should have a background image. that is responsive  */}
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <AntDesign name="left" size={32} color={COLORS.PRIMARY} style={ActivityStyle.backBtn} onPress={() => alert('it has to take me back to the first page')}/>
                        <Text style={{fontSize:25, color:COLORS.WHITE, textAlign:'center'}}>Your package</Text>
                    </View>
               </ImageBackground>
            </View>
            <View style={ActivityStyle.zindexView}>
                <ScrollView contentContainerStyle={ActivityStyle.pscroll}>
                    {/* <View st> */}
                    {/* <Text>{props.route.itemData.title}</Text> */}
                    <Text>title</Text>
                    {/* </View> */}
                    <View style={ActivityStyle.pdetail}>
                        <Text>
                            Detailed description of the trip
                        </Text>
                    </View>
                    <View style={ActivityStyle.selectPackage}>
                        <Text>Good to know section</Text>
                        {/* This section should allow the user to remove things  */}
                    </View>
                    <View style={ActivityStyle.aMap}>
                        <Text>
                            Where to go section.
                        </Text>
                        {/* This section should include a map  */}
                    </View>
                    <View style={ActivityStyle.pbuy}>
                        <Text style={{borderWidth:1,padding:3, borderColor:COLORS.PRIMARY, color:COLORS.PRIMARY}}>$400</Text>
                        <Btn BtnStyle={ActivityStyle.bookBtn} 
                        Onpress={()=>alert('it works')}
                        BtnTextStyle={ActivityStyle.btnText}
                        BtnText="Book now"/>
                    </View>
                </ScrollView>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}