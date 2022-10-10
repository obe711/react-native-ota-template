import React from 'react';
import {useNavigate} from 'react-router-native';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from '../../Components';

const Dev = () => {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <Button
        text="FIND DEVICES"
        inverted
        onPress={() => {
          navigate('/device-list');
        }}
        textStyle={{fontSize: 18}}
      />
      <Text>Find Devices</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: '95%',
    paddingHorizontal: '20%',
  },
});
export default Dev;
