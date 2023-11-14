import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button } from 'tamagui';

import DeviceList from "../components/deviceList";
import useBLE from "../utils/useBLE";

export default function HomeScreen() {
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
    <SafeAreaView style={styles.container}>
        <Button onPress={openModal} style={styles.tamaguiButton} variant="outlined">Scan Devices</Button>

        <DeviceList devices={allDevices} />
    </SafeAreaView>
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
    marginTop: 125,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
