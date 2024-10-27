import React from "react";
import { View, Text } from "react-native";
import styles from "@/constants/styles";
export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <View style={styles.home_container}>
      <Text style={styles.text_light}>Homepage</Text>
      {/* TODO: Add landing page content */}
      </View>
    </View>
  );
}
