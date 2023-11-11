import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text, TamaguiProvider, Button } from 'tamagui';
import DeviceList from "./src/components/deviceList";
import useBLE from "./src/utils/useBLE";
import config from './tamagui.config';

export default function App() {
  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectedDevice,
  } = useBLE();
  
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const scanForDevices = async () => {
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      scanForPeripherals();
    }
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    scanForDevices();
    setIsModalVisible(true);
  };

  return (
    <TamaguiProvider config={config}>
      <SafeAreaView style={styles.container}>
        <Button onPress={openModal} style={styles.tamaguiButton} variant="outlined">Scan Devices</Button>
        <DeviceList devices={allDevices} />
        {/* Add any other Tamagui components or custom components here */}
      </SafeAreaView>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tamaguiButton: {
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 75,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
