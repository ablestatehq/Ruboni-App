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
                btnText
                }){
    // const url = props.image;
    return (
        <View style={itemCard}>
            <TouchableOpacity onPress={touchImage} style={touchStyle}>
                <Image source={url} style={imgStyle}/>
            </TouchableOpacity>
            <Text style={itemDes}>{
                description.length > 10 ? description.slice(10) + '...': description
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