import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { use, useState } from "react";
import Button from "./src/components/Button";
import { styles } from "./App.styles";
import { KeyboardAvoidingView, Platform } from "react-native";
import { currencies } from "./src/constants/currencies";
import { Input } from "./src/components/input";
import ResultCard from "./src/components/ResultCard";
import { exchangeRateApi } from "./src/services/api";
import { convertCurrency } from "./src/utils/convertCurrency";

export default function App() {
  const [result, setResult] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("BRL");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);

  async function fetchExchangeRate() {
    try {
      setLoading(true);
      if (!amount) return;
      const data = await exchangeRateApi(fromCurrency);
      const rate = data?.rates[toCurrency];

      setExchangeRate(rate);
      const convertedAmount = convertCurrency(amount, rate);
      setResult(convertedAmount);
    } catch (error) {
      alert("Erro ao buscar a taxa de câmbio. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  function swapCurrencies() {
  setFromCurrency(toCurrency);
  setToCurrency(fromCurrency);
  setResult(null);
  setExchangeRate(null);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <StatusBar style="light" />
          <View style={styles.header}>
            <Text style={styles.title}>Conversor de moedas</Text>
            <Text style={styles.subtitle}>
              Converta valores entre diferentes moedas
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.label}>De:</Text>
            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button
                  key={currency.code}
                  currency={currency}
                  variant="primary"
                  onPress={() => setFromCurrency(currency.code)}
                  isSelected={fromCurrency === currency.code}
                />
              ))}
            </View>
            <Input value={amount} onChangeText={setAmount} label="Valor:" />
            <TouchableOpacity style={styles.swapButton} onPress={swapCurrencies}>
              <Text style={styles.swapButtonText}>↑↓</Text>
            </TouchableOpacity>
            <Text style={styles.label}>Para:</Text>
            <View style={styles.currencyGrid}>
              {currencies.map((currency) => (
                <Button
                  key={currency.code}
                  currency={currency}
                  variant="secondary"
                  onPress={() => setToCurrency(currency.code)}
                  isSelected={toCurrency === currency.code}
                />
              ))}
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.convertButton,
              (!amount || loading) && styles.convertButtonDisabled,
            ]}
            onPress={fetchExchangeRate}
            disabled={!amount || loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.convertButtonText}>Converter</Text>
            )}
          </TouchableOpacity>

          <ResultCard
            exchangeRate={exchangeRate}
            result={result}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            currencies={currencies}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// terminando o código, aleluia