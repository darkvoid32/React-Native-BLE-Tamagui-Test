import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Button } from 'tamagui';

import { containerStyles, buttonStyles } from "../constants/Styles";
import DeviceList from "../components/deviceList";
import useBLE from "../utils/useBLE";

export default function BleScreen() {
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
    <SafeAreaView style={containerStyles.container}>
        <Button onPress={openModal} style={buttonStyles.roundedButton} variant="outlined">Scan Devices</Button>

        <DeviceList devices={allDevices} />
    </SafeAreaView>
  );
}
