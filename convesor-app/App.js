import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from './src/components/Button';
import { styles} from './App.styles'

export default function App() {
  return (
    <KeyboardAvoidingView>
    <View>
     
      <StatusBar style="light" />

      <View>
        <Text> Conversor de Moedas</Text>
        <Text> Converta valores entre diferentes moedas</Text>
      </View>
      
      <View>
        <Text> De:</Text>
        <Button variant= 'primary'></Button>
      </View>
    </View>
    </KeyboardAvoidingView>
  )};

  //PAREI EM 51:26 PORÉM ESTA DANDO ERRO, FAZER NOVAMENTE ALGUNS MINUTOS.
