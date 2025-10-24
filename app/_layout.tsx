import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Restaurant Rating App' }} />
      <Stack.Screen name="login" options={{ title: 'Login' }} />
      <Stack.Screen name="signup" options={{ title: 'Sign Up' }} />
      <Stack.Screen name="restaurants" options={{ title: 'Restaurants' }} />
      <Stack.Screen name="rating" options={{ title: 'Rate Restaurant' }} />
      <Stack.Screen name="add-restaurant" options={{ title: 'Add Restaurant' }} />
    </Stack>
  );
}