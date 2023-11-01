import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme } from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';
import React, { useState } from "react";
import useBLE from "./useBLE";

const App = () => {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  // const {
  //   requestPermissions,
  //   scanForPeripherals,
  //   allDevices,
  //   connectToDevice,
  //   connectedDevice,
  //   heartRate,
  //   disconnectFromDevice,
  // } = useBLE();

  // const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  // const scanForDevices = async () => {
  //   const isPermissionsEnabled = await requestPermissions();
  //   if (isPermissionsEnabled) {
  //     scanForPeripherals();
  //   }
  // };

  // const hideModal = () => {
  //   setIsModalVisible(false);
  // };

  // const openModal = async () => {
  //   scanForDevices();
  //   setIsModalVisible(true);
  // };
      
  // // TODO: Create component to list scanned devices
  // TODO: Create background BLE scanning

  return (
    // <PaperProvider theme={paperTheme}>
    //   <View>
    //     <Text>Open up App.js to start working on your app! Testing</Text>
    //     <StatusBar style="auto" />
    //   </View>
    // </PaperProvider>
    <>
      <View>
        <Text>Open up App.js to start working on your app! Testing</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

export default App;