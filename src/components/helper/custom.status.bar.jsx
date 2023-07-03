import { StatusBar } from "react-native"
import { COLORS } from "../../constants/constants"

export default CustomStatusBar = () => {
    return <StatusBar
    backgroundColor={COLORS.WHITE}
    barStyle='dark-content'
    />
}