import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({onPress, text, inverted, connecting, style, textStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        !inverted
          ? styles.button
          : !connecting
          ? styles.buttonInverted
          : styles.buttonConnecting,
        style,
      ]}>
      <Text style={[!inverted ? styles.text : styles.textInverted, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    marginBottom: 5,
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    height: 60,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonInverted: {
    marginTop: 5,
    marginBottom: 5,
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonConnecting: {
    marginTop: 5,
    marginBottom: 5,
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    width: '100%',
    height: 60,
    borderWidth: 5,
    borderColor: 'black',
  },
  textInverted: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default Button;
