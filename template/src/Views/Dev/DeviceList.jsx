import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useNavigate} from 'react-router-native';
import {Button} from '../../Components';
import {
  DeviceListItem,
  UpdateAlertModal,
} from '../../Features/DeviceConnection';
import {useDeviceData} from '../../Context/device-context';

const renderItem = (target, connectPeripheral, foundDevicesList) => {
  const index = foundDevicesList.indexOf(target);
  return (
    <DeviceListItem
      targetNum={index}
      status={target.connected}
      onPress={() => connectPeripheral(target)}
      name={target.name}
    />
  );
};

const DeviceList = () => {
  const {
    foundDevicesList,
    connectPeripheral,
    connectedUUIDs,
    deviceToUpdate,
    updateDevice,
    setDeviceToUpdate,
    handleScan,
  } = useDeviceData();

  const navigate = useNavigate();
  const [showingModal, setShowingModal] = useState(false);

  useEffect(() => {
    if (connectedUUIDs.length < 1) {
      handleScan();
    }
    return () => {
      setDeviceToUpdate(null);
    };
  }, []);

  useEffect(() => {
    if (deviceToUpdate) {
      if (deviceToUpdate && !showingModal) {
        setShowingModal(true);
        UpdateAlertModal(
          () => {
            // On Update
            updateDevice(deviceToUpdate).then(successful => {
              if (successful) {
                // OTA HAS BEGUN
              }
              setShowingModal(false);
            });
          },
          () => {
            // On Cancel
            setDeviceToUpdate(null);
            setShowingModal(false);
          },
        );
      }
    }
  }, [deviceToUpdate]);

  return (
    <View style={styles.mainComponent}>
      {/* Target List View */}
      <View style={styles.DeviceList}>
        <FlatList
          data={foundDevicesList}
          renderItem={({item}) =>
            renderItem(item, connectPeripheral, foundDevicesList)
          }
          keyExtractor={item => item.uuid}
        />
      </View>
      {/* Scan Button View */}
      <View style={styles.button}>
        {connectedUUIDs?.length > 0 && (
          <Button
            style={styles.playButton}
            text="CONTINUE"
            inverted
            onPress={() => navigate('/main-menu')}
          />
        )}
        <TouchableOpacity onPress={() => navigate('/find-devices')}>
          <Text style={{fontWeight: '400', fontSize: 15, marginBottom: 20}}>
            CANCEL
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainComponent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    height: '95%',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  DeviceList: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    height: '80%',
    width: '90%',
  },
});

export default DeviceList;
