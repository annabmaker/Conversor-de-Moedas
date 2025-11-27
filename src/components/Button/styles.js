import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';


export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.inputBackground,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    margin:4,
  },
  buttonText: {
    color: colors.text,
    fontWeight:'500',
    fontSize: 16,
  },
  buttonPrimary: {  
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});