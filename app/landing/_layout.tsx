import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import Drawer from 'expo-router/drawer';

export default function LandingLayout() {
  return (
    <>
          <Drawer.Screen options={{ title: 'Landing Page' }} />
          <ThemedText>Welcomee</ThemedText>

    </>

  );
}
