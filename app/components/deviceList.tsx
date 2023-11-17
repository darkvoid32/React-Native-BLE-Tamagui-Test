import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Device } from 'react-native-ble-plx';
import { Text } from 'tamagui';

import { containerStyles, flatListStyles } from '../constants/Styles';

interface DeviceListProps {
  devices: Device[];
}

const DeviceList: React.FC<DeviceListProps> = ({ devices }) => {
  useEffect(() => {}, [devices]);

  return (
    <View style={containerStyles.container}>
      <FlatList
        data={devices
          .filter(device => device.name !== null) // Exclude devices with null names
          .map(device => ({ key: device.name }))}
        renderItem={({ item }) => <Text style={flatListStyles.item} color={'black'}>{item.key}</Text>}
      />
    </View>
  );
};
  
export default DeviceList;