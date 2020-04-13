import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MarkerItem from './MarkerItem';

import { useSelector, useDispatch } from 'react-redux';
import { setCoordinate } from '../redux/mapItems/actions';

// The main Map Component brings everything together

const MapItem = () => {
  const { mapItems } = useSelector((state) => state);
  const { longitude, latitude } = mapItems;
  const dispatch = useDispatch();
  const getLocationPermission = async () => {
    // Request the map permission
    const { status } = await Permissions.getAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      await Permissions.askAsync(Permissions.LOCATION);
    }
    const { coords } = await Location.getCurrentPositionAsync({});
    // set the users current location to the state
    dispatch(
      setCoordinate({
        longitude: coords.longitude,
        latitude: coords.latitude,
      })
    );
  };

  // runs once to get permissions
  useEffect(() => {
    getLocationPermission();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {latitude !== null && (
        <MapView
          region={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
          style={styles.mapStyle}
          latitude={latitude}
        >
          <MarkerItem />
        </MapView>
      )}
    </View>
  );
};

export default MapItem;

const styles = StyleSheet.create({
  mapStyle: {
    height: Dimensions.get('window').height,
  },
});
