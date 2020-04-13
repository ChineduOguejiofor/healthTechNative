import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { setCoordinate } from '../redux/mapItems/actions';
import { GOOGLE_API_KEY } from 'react-native-dotenv';

// This component handles the Search input
const MapInput = () => {
  const dispatch = useDispatch();
  return (
    <View style={{ height: 160 }}>
      <GooglePlacesAutocomplete
        placeholder='Enter Location'
        minLength={2}
        autoFocus={true}
        returnKeyType={'search'}
        listViewDisplayed='false'
        fetchDetails={true}
        onPress={(data, details = null) => {
          const { lat, lng } = details.geometry.location;
          dispatch(
            setCoordinate({
              longitude: lng,
              latitude: lat,
            })
          );
        }}
        styles={styles}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={300}
      />
    </View>
  );
};
export default MapInput;

const styles = StyleSheet.create({
  textInputContainer: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
  },

  poweredContainer: {
    display: 'none',
  },
  description: {
    fontWeight: 'bold',
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
  textInput: {
    marginLeft: 0,
    marginRight: 0,
    height: 38,
    color: '#5d5d5d',
    fontSize: 16,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 2,
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
});
