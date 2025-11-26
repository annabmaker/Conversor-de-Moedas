import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, Platform, ScrollView, Input, } from 'react-native';
import { Button } from './src/components/Button';
import { styles } from './App.styles';
import { currencies } from './src/constants/currencies'

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.scrollView}>

        <View style={styles.content}>

          <StatusBar style="light" />

          <View style={styles.header}>
            <Text style={styles.title}> Conversor de Moedas</Text>
            <Text style={styles.subTitle}> Converta valores entre diferentes moedas</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}> De:</Text>
            <View style>
              {currencies.map(currency => (
                <Button variant='primary'
                  key={currency.code}
                  currency={currency}
                >

                </Button>
              ))}

              <Input />

            </View>

          </View>



        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
};

//paramos em 1 hora e 10 minutos e 43 segundos
