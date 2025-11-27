import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgound,
        alignItems: 'center',
        justifyContent: 'center',
      },
      card: {
        backgroundColor: colors.cardBackgound,
        borderRadius: 16,
        padding: 24,      
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
      },
        label: {
          color: colors.textSecondary,
          fontSize: 14,
          marginBottom: 8,
          marginTop: 8,
        },
        resultText: {
          color: colors.text,
          fontSize: 32,
          fontWeight: 'bold',
        },
      });