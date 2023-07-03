import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { COLORS } from '../../../constants/constants';
import { AntDesign } from '@expo/vector-icons';
import { paymentMethods } from './style';
import { useContext, useState } from 'react';
import appwriteContext from '../../contexts/appwriteContext';
import {  RadioButton, TextInput } from 'react-native-paper';


export default function PaymentMethod(props){
    const { isLoggedIn } = useContext(appwriteContext);
    const [selectedValue, setSelectedValue] = useState(null);
    const { screenName } = props.route.params
    
    return(
        <View style={paymentMethods.container}>
            <View style={paymentMethods.header}>
                <AntDesign name='left' size={32} color={COLORS.BLACK} onPress={()=>{
                    console.log(screenName)
                    props.navigation.navigate("Payment", {
                        screenName
                    })
                }}/>
                <Text style={paymentMethods.payText}>Change your payment methods</Text>
            </View>
            <View style={paymentMethods.content}>
                <View style={paymentMethods.radionButtons}>
                    <Text>Select your default payment method.</Text>
                    <RadioButton.Group
                    onValueChange={(value) => setSelectedValue(value)}
                    value={selectedValue}>
                        <RadioButton.Item label='Mobile money' value='mm'/>
                        <RadioButton.Item label='Visa Card' value='card' />
                        <RadioButton.Item label='Pay pal' value='pp' />
                    </RadioButton.Group>
                </View>
                <View style={{flexDirection: 'column', alignItems:'center'}}>
                    {
                        selectedValue == "mm" ? 
                        (<View style={{flexDirection:'column', alignItems: 'center', width: '90%', }}>
                            <View style={{flexDirection: 'row', justifyContent:'space-between', width:'50%'}}>
                            </View>
                            <Text>Enter the mobilemoney number</Text>
                            <TextInput placeholder='phone number' style={{width:'100%'}} keyboardType='phone-pad' />
                            <TouchableOpacity>
                                <Text>Set as default</Text>
                            </TouchableOpacity>
                        </View>) :
                        selectedValue == "card" ? 
                        (<View>
                            <Text>Provide your card information</Text>
                        </View>) :
                        selectedValue == 'pp' ?
                        (<View>
                            <Text>Provide your paypal credintials</Text>
                        </View>)
                        :
                        (
                            <View></View>
                        )
                    }
                </View>
            </View>
        </View>
    )
}