import { BackHandler } from "react-native";
import { colors } from "./src/styles/colors";
import { StyleSheet } from "react-native";




export const styles = StyleSheet.create({
  container: {
    flex: 1,
    BackgroundColor: colors.backgound,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flexGrow: 1,

  },
  content: {    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 24,
  },
  header: {    
    marginBottom: 32,
  },
  title: {    
    color: colors.text,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
},
    subtitle: {    
    color: colors.textSecondary,
    fontSize: 16,
},
card: {    
    backgroundColor: colors.cardBackgound,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
},
  label: {    
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: 8,
  },
  currencyGrid: {    
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swapButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 16,
    marginBottom: 24,
  },
  swapButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  convertButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 10,
    marginBottom: 24,
  },
  convertButtonDisabled: {
    backgroundColor: colors.disabled,
  },
  convertButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  

});