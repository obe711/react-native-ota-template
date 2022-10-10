import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from '../../../Components';

const DeviceListItem = ({onPress, status, name}) => (
  <View style={styles.box}>
    <View style={styles.nameBox}>
      <Text style={styles.textName}>{name}</Text>
    </View>
    <Button
      text={status ? 'CONNECTED' : 'CONNECT'}
      inverted={!status}
      connecting={false}
      onPress={onPress}
    />
  </View>
);

const styles = StyleSheet.create({
  box: {
    borderStyle: 'solid',
    paddingHorizontal: '1%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 20,
  },
  detailsBox: {
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    width: '35%',
  },
  nameBox: {
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    width: '100%',
  },
  image: {
    paddingVertical: '3%',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  textName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
export default DeviceListItem;
