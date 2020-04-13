import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setRadius } from '../redux/mapItems/actions';
const Search = () => {
  const { mapItems } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState('');

  const handleTextChange = (val) => setTextValue(val);
  const handlePress = () => {
    if (textValue.length) {
      dispatch(setRadius(textValue));
      ToastAndroid.show('Radius Updated!!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Please input Radius', ToastAndroid.SHORT);
    }
  };
  const { label, container, input, btn, btnText } = styles;
  return (
    <View style={container}>
      <Text style={label}>Radius</Text>
      <TextInput
        style={input}
        placeholder='Input Radius in meters'
        onChangeText={handleTextChange}
        value={textValue}
        keyboardType='number-pad'
      />
      <TouchableOpacity style={btn} onPress={handlePress}>
        <Text style={btnText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    fontSize: 20,
    alignSelf: 'center',
  },
  input: {
    padding: 8,
    fontSize: 20,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 2,
    width: '65%',
  },
  btn: {
    backgroundColor: '#207DFE',
    padding: 9,
    width: '13%',
    margin: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
