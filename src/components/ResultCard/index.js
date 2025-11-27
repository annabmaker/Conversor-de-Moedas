import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default function ResultCard({ result, exchangeRate, fromCurrency, toCurrency, currencies }) {
    if (!result || !exchangeRate) return null;

    const toSymbol = currencies.find(c => c.code === toCurrency)?.symbol || '';

    return (
        <View style={styles.card}>
            <Text style={styles.label}>Resultado:</Text> 
            <Text style={styles.resultText}>{toSymbol} {result}</Text>
            <Text style={styles.label}>Taxa de câmbio:</Text>
            <Text style={styles.resultText}>1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}</Text>
        </View>
    );
}