import { Link } from "expo-router";
import Drawer from "expo-router/drawer";
import { StyleSheet, View, Text } from "react-native";

import React from "react";

export default function NotFoundScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text>This page doesn't exist</Text>
        <Link href="/" style={styles.link}>
          <Text>Go back</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
