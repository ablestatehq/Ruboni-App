import {Image, Text, TouchableOpacity, View} from 'react-native';
import Btn from './Btn';

function ItemCard({itemCard, 
                touchImage, 
                touchStyle, 
                url, 
                imgStyle,
                itemDes,
                description, 
                itemFooter,
                itemF,
                days,
                price,
                buttonStyle,
                OnPress,
                textStyleBtn,
                btnText,
                OnLongPress = () =>{alert("Long pressed")}
                }){
    // const url = props.image;
    return (
        <View style={itemCard}>
            <TouchableOpacity onPress={touchImage} style={touchStyle} onLongPress={OnLongPress}>
                <Image source={url} style={imgStyle}/>
            </TouchableOpacity>
            <Text style={itemDes}>{
                description.length > 30 ? description.slice(0, 30) + '...': description
            }</Text>
            <View style={itemFooter}>
                <Text style={itemF}>{days}</Text>
                <Text style={itemF}>{price}</Text>
            </View>
            <Btn BtnStyle={buttonStyle} Onpress={OnPress} BtnTextStyle={textStyleBtn} BtnText={btnText} />
        </View>
    )
}

export default ItemCard;