import {
    View, 
    Text,
    Modal,
    StyleSheet
} from 'react-native';
import Btn from './Btn';
import { COLORS } from '../../constants/constants';


export default function Dialog({
    isV,// This is a boolean value for checking whether the model should be visible.
    title, // Title for the dialog
    message, // message to be displayed in the dialog
    yesPressed, // callback for the yes button press
    noPressed // callback for the no button press
}){
    return (
        <Modal visible={isV} animationType='fade' transparent={true}>
            <View style={styles.modalView}>
                <View style={styles.alert}>
                    <Text style={styles.alertTitle}>{title}</Text>
                    <Text style={styles.alertMessage}>{message}</Text>
                    <View style={styles.alertBtnSection}>
                        <Btn BtnStyle={styles.alertBtn} BtnText="Yes" BtnTextStyle={styles.btnText} Onpress={yesPressed}/>
                        <Btn BtnStyle={styles.alertBtn} BtnText="No" BtnTextStyle={styles.btnText} Onpress={noPressed} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    alert:{
        width:'80%',
        elevation:24,
        backgroundColor:COLORS.PRIMARY_1,
        padding:20
    },
    alertTitle:{
        // margin:24,
        fontWeight:"bold",
        fontSize:25,
        color:"#000"
    },
    alertMessage:{
        // marginLeft:24,
        // marginRight:24,
        // marginBottom:24,
        fontSize:16,
        color:"#000"
    },
    alertBtnSection:{
        width:'100%',
        marginTop:0,
        marginRight:0,
        // marginBottom:8,
        // marginLeft:24,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',

    },
    alertBtn:{
        marginTop:12,
        marginRight:8,
    },
    btnText:{

    }
});