import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import Colors from '../constants/Colors';
import { useColorScheme } from '../components/useColorScheme';
import { useClientOnlyValue } from '../components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  focused: boolean;
}) {
  const iconColor = props.focused ? 'black' : props.color;
  return <FontAwesome size={28} style={{ marginBottom: -3, color: iconColor }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name="code" color={color} focused={focused} />
        ),
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          href: "/",
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          href: "/scan",
          title: 'BLE',
        }}
      />

    </Tabs>
  );
}