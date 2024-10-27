import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../constants/styles";
import { Link } from "expo-router";

export default function LandingScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.Purrtext}>PurrEverHome</Text>
      <Text style={styles.tagtex}>Where every cat finds a forever home</Text>
      {/* insert app icon */}
      <Text style={styles.adpttext}>Adopt a cat today!</Text>
      <Link href="/login" asChild>
        <TouchableOpacity style={styles.logbtn}>
          <Text style={styles.txtbtn}>Login</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/register" asChild>
        <TouchableOpacity style={styles.regbtn}>
          <Text style={styles.txtbtn}>Register</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
