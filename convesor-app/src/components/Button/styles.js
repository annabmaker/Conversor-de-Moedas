import {StyleSheet } from "react-native";
import { colors } from '../../styles/colors'
import { styles} from './App.styles'
export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.inputBackground,
        paddingHorizontal: 16,
        paddingVertical: 8,
        margin: 4,
        borderRadius: 8
    },
    buttonText: {
        color: colors.text,
        fontWeight: '500'
    },
    buttonPrimary : {
        backgroundColor: colors.primary
    },
    buttonSecudary: {
        backgroundColor: colors.secondary
    }
})