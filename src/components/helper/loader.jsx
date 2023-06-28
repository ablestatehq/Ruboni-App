import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import { COLORS } from "../../constants/constants";

export default function Loading(props){
    return(
        <View style={styles.loader}>
            <StatusBar
            backgroundColor={COLORS.PRIMARY_1}
            barStyle="dark-content" />

            <ActivityIndicator
            color={COLORS.PRIMARY}
            size={'large'}
            />
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        flex:1,
        backgroundColor:COLORS.WHITE,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        opacity: 0.2
      },

})