import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { getDistance } from 'geolib';
import { getNearByHospitals } from '../redux/mapItems/actions';

// Handles display and logic for the Markers
const MarkerItem = () => {
  const { mapItems } = useSelector((state) => state);
  const { longitude, latitude, radius, hospitals } = mapItems;
  const dispatch = useDispatch();

  //rerenders the markers each time a use updates location or the radius
  useEffect(() => {
    dispatch(getNearByHospitals());
  }, [longitude, latitude, radius]);

  return (
    <View>
      {hospitals &&
        hospitals.map((places, idx) => {
          const {
            geometry: { location },
          } = places;
          const { lat, lng } = location;
          const { name, vicinity } = places;
          const distance =
            getDistance(
              { latitude, longitude },
              {
                latitude: lat,
                longitude: lng,
              }
            ) / 1000;

          return (
            <Marker key={idx} coordinate={{ latitude: lat, longitude: lng }}>
              <Callout>
                <View style={{ width: 300, height: 100 }}>
                  <Text>
                    <Text style={{ fontWeight: 'bold' }}> Name</Text>: {name}
                    {'\n'}
                    <Text style={{ fontWeight: 'bold' }}>Address:</Text>{' '}
                    {vicinity}
                    {'\n'}
                    <Text style={{ fontWeight: 'bold' }}> Distance</Text>:
                    {distance.toFixed(2)}
                    {'km'}
                  </Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
    </View>
  );
};

export default MarkerItem;
