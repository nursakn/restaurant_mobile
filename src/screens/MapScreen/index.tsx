import {View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const MapScreen: React.FC = () => {
  return (
    <View>
      <MapView
        initialRegion={{
          latitude: 51.089764,
          longitude: 71.399953,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </View>
  );
};

export default MapScreen;
