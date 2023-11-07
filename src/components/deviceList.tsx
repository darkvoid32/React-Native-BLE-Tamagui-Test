import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Device } from 'react-native-ble-plx';

interface DeviceListProps {
  devices: Device[];
}

const DeviceList: React.FC<DeviceListProps> = ({ devices }) => {
  useEffect(() => {}, [devices]);

  return (
    <View style={styles.container}>
      <FlatList
        data={devices
          .filter(device => device.name !== null) // Exclude devices with null names
          .map(device => ({ key: device.name }))}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};
  
export default DeviceList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});