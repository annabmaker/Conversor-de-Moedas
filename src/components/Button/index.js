import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

export default function Button({
  variant = "primary",
  currency,
  title,
  onPress,
  isSelected,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isSelected && (variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary),
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{currency.code}</Text>
    </TouchableOpacity>
  );
}
