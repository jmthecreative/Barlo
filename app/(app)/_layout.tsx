import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import HomeIcon from '@/assets/svgs/HomeIcon';
import SearchIcon from '@/assets/svgs/SearchIcon';
import CommunityIcon from '@/assets/svgs/CommunityIcon';
import AlertIcon from '@/assets/svgs/AlertIcon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#111827',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0,
            height: 98,
            paddingTop: 10,
          },
          default: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0,
            height: 98,
            paddingTop: 10,
          },
        }),
        tabBarIcon: ({ focused }) => {
          const iconColor = focused ? '#111827' : '#D1D5DB';
          const iconSize = 20;

          if (route.name === 'index') {
            return <HomeIcon color={iconColor} width={iconSize} height={iconSize} />;
          } else if (route.name === 'search') {
            return <SearchIcon color={iconColor} width={iconSize} height={iconSize} />;
          } else if (route.name === 'community') {
            return <CommunityIcon color={iconColor} width={iconSize} height={iconSize} />;
          } else if (route.name === 'alert') {
            return <AlertIcon color={iconColor} width={iconSize} height={iconSize} />;
          }
          return null;
        },
      })}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
        }}
      />
      <Tabs.Screen
        name="alert"
        options={{
          title: 'Alert',
        }}
      />
    </Tabs>
  );
}
