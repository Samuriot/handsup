import { Stack, Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name = "(tabs)" options={{headerShown: false}}/>
    </Stack>
  )
}

export default StackLayout;