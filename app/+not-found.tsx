import { Link, Stack } from 'expo-router';
import Drawer from 'expo-router/drawer';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Drawer.Screen options={{ title: 'Not Found' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This page doesn't exist</ThemedText>
        <Link href="/landing" style={styles.link}>
          <ThemedText type="link">Back to home</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
