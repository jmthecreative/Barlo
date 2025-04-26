import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import 'react-native-reanimated';

import { AuthProvider } from '../context/AuthContext';
import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.otf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.otf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.otf'),
    'Manrope-Regular': require('../assets/fonts/Manrope-Regular.otf'),
    'Manrope-SemiBold': require('../assets/fonts/Manrope-SemiBold.otf'),
    'Manrope-Bold': require('../assets/fonts/Manrope-Bold.otf'),
  });
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (error) {
      console.error("Font loading error:", error);
    }
  }, [error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="profile"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthProvider>
  );
}
