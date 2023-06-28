import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { PayStyle } from './style'
import { AntDesign } from '@expo/vector-icons'
import { COLORS, FONTS } from '../../../constants/constants'
import { totalCost } from '../../../utils/cartFunctions'
import { useContext } from 'react'
import CartContext from '../../contexts/cart'

// Well still, if the navigation is SourvinerView, show a different header
export default function Pay({navigation, route}){
    const { screenName, Title, image, description, price } = route.params
    const { cartItems } = useContext(CartContext);

    
    if(screenName === 'Cart'){
        return (
            <View style={PayStyle.payContainer}>
                <View style={PayStyle.paymentMethod}>
                    <AntDesign name='left' size={32} color={COLORS.BLACK} onPress={()=>{
                        navigation.navigate('CartTab');
                    }}/>
                    <Text style={PayStyle.payHeading}>Make Payment</Text>
                </View>

                <View style={PayStyle.payDetails}>
                    <Text style={{borderBottomWidth: 0.4,borderBottomColor: COLORS.BLACK}}>Order Summury</Text>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop:10}}>
                        <Text style={{fontSize: FONTS.SIZE.NORMAL}}>Items total({cartItems.length})</Text>
                        <Text>${totalCost(cartItems)}</Text>
                    </View>
                </View>
                <View style={PayStyle.payDetails}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>Payment Methods</Text>
                       <TouchableOpacity>
                       <Text style={{color:COLORS.PRIMARY_1}} onPress={() => alert("Go to settings")}>change</Text>
                       </TouchableOpacity>
                    </View>

                    <View style={PayStyle.showDetails}>
                        <Text style={{margin:5}}>{}Show payment details now</Text>
                    </View>
                </View>
            </View>
        )
    }

    return(
        <View style={PayStyle.payContainer}>
                <View style={PayStyle.paymentMethod}>
                    <AntDesign name='left' size={32} color={COLORS.BLACK} onPress={()=>{
                        navigation.navigate(screenName, {
                            Title,
                            image, 
                            description,
                            price
                        });
                    }}/>
                    <Text style={PayStyle.payHeading}>Make Payment</Text>
                </View>

                <View style={{padding:10}}>
                    <Text style={{fontSize:FONTS.SIZE.NORMAL}}>
                        Book with full amount payment Or click the package or room and enter the amount you want to pay
                    </Text>
                    {/* <Text>If you want to pay full amount, click on the item and select full.</Text> */}
                </View>
                <View style={PayStyle.payDetails}>
                    <Text style={{borderBottomWidth: 0.4,borderBottomColor: COLORS.BLACK}}>Order Summury</Text>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop:10}}>
                        <Text style={{fontSize: FONTS.SIZE.NORMAL}}>{Title}</Text>
                        <Text>${price}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop:10}}>
                        <Text style={{fontSize: FONTS.SIZE.NORMAL}}>Items total({cartItems.length})</Text>
                        <Text>${totalCost(cartItems)}</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop:10, borderTopWidth:0.4}}>
                        <Text style={{fontSize: FONTS.SIZE.NORMAL}}>Order Total</Text>
                        <Text>${totalCost(cartItems) + Number(price.slice(1))}</Text>
                    </View>
                </View>
                <View style={PayStyle.payDetails}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>Payment Methods</Text>
                       <TouchableOpacity>
                            <Text style={{color:COLORS.PRIMARY_1}} onPress={() => alert("Go to settings")}>change</Text>
                       </TouchableOpacity>
                    </View>

                    <View style={PayStyle.showDetails}>
                        {/* Pick payment user's payment details from the database, the one that is default  */}
                        <Text style={{margin:5}}>{}Show payment details now</Text>
                    </View>
                </View>
            </View>
    )
}