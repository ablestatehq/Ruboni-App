import { AntDesign } from "@expo/vector-icons";
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
} from 'react-native';
import Btn from "../../helper/Btn";
import { sourvinerStyles } from "./style";
import { COLORS } from "../../contants/contants";

export default function SourvinerView(){
    // const image = props.route.params.itemData.url;
    // get the sourviner name from the route.
    return(
        <View style={sourvinerStyles.sContainer}>
            <View style={sourvinerStyles.header}>
               <ImageBackground source={'image'} resizeMode="contain" style={sourvinerStyles.bkheader}>
                     {/* This section should have a background image. that is responsive  */}
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <AntDesign name="left" size={32} color={COLORS.PRIMARY} style={sourvinerStyles.backBtn} onPress={() => alert('it has to take me back to the first page')}/>
                        <Text style={{fontSize:25, color:COLORS.WHITE, textAlign:'center'}}>Details</Text>
                    </View>
               </ImageBackground>
            </View>
            <View style={sourvinerStyles.zindexView}>
                    {/* <View st> */}
                    {/* <Text>{props.route.itemData.title}</Text> */}
                    {/* <Text>title</Text> */}
                    {/* </View> */}
                    <View style={sourvinerStyles.sdetail}>
                        <Text>
                            Detailed description of the sourviner
                        </Text>
                    </View>
                    <View style={sourvinerStyles.sBuy}>
                        <Text style={{padding:3, color:COLORS.PRIMARY}}>$400</Text>
                        <Btn BtnStyle={sourvinerStyles.buyBtn} 
                        Onpress={()=>alert('it works')}
                        BtnTextStyle={sourvinerStyles.btnText}
                        BtnText="Add to cart"/>
                    </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
    // return(
    //     <View>
    //         <View style={header}>
    //             {/* This section should have a background image. that is responsive  */}
    //             <AntDesign name="left" size={32} color={COLORS.WHITE} />
    //             <Text>Sourviner name</Text>
    //         </View>
    //         <View>
    //             <View>
    //                 <Text>
    //                     Detailed description of the Sourviner
    //                 </Text>
    //             </View>
    //             <View>
    //                 <Text>$400</Text>
    //                 <Btn BtnStyle={sourvinerStyles.bookBtn} 
    //                 Onpress={()=>alert('it works')}
    //                 BtnTextStyle={sourvinerStyles.btnText}
    //                 BtnText="Book now"/>
    //             </View>
    //         </View>
    //     </View>
    // )
}