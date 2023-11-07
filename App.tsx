import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import useBLE from "./src/utils/useBLE";
import DeviceList from "./src/components/deviceList";

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
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={openModal}
        accessibilityLabel="Scan Devices"
        style={styles.pressable}
      >
        <Text style={styles.text}>Scan Devices</Text>
      </Pressable>
      <DeviceList devices={allDevices}/>
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
  pressable: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'beige',
    borderWidth: 5,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  list: {
    flex: 0.8,
    backgroundColor: 'transparent',
  },
  text: {
    textAlign: 'center',
  }
});
