import {Image, Text, View} from 'react-native';
import Btn from './Btn';

function ItemCard(props){
    // const url = props.image;
    return (
        <View style={props.itemCard}>
            <Image source={require('../../../assets/Bodaboda-safari.jpg')} style={props.imgStyle}/>
            <Text style={props.itemDes}>{
                props.description.length > 10 ? props.description.slice(10) + '...': props.description
            }</Text>
            <View style={props.itemFooter}>
                <Text style={props.itemF}>{props.days}</Text>
                <Text style={props.itemF}>{props.price}</Text>
            </View>
            <Btn BtnStyle={props.buttonStyle} Onpress={props.OnPress} BtnTextStyle={props.textStyleBtn} BtnText={props.btnText} />
        </View>
    )
}

export default ItemCard;