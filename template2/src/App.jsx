import React from 'react';
import {Routes, Route} from 'react-router-native';
import RequireAuth from './Routing/RequireAuth';
import publicRoutes from './Routing/public.routes';
import protectedRoutes from './Routing/protected.routes';
import {DeviceDataProvider} from './Context/device-context';
// import { TargetDataProvider } from '../Shared/Context/target-context';
// // import useBleManager from "../Shared/Hooks/ble.hook";
// import useCoolFunBLE from '../Shared/Hooks/coolfunble';
// import Overlay from '../Shared/Components/Overlay/Overlay';
// import UpdatingOverlay from '../Shared/Components/UpdatingOverlay/UpdatingOverlay';

const App = () => {
  // const {
  //   isScanning,
  //   startScan,
  //   list,
  //   connectPeripheral,
  //   connectedList,
  //   playerData,
  //   initTarget,
  //   setActive,
  //   resetTargetState,
  //   setAllColor,
  //   sendRawMessage,
  //   setBleLog,
  //   bleLog,
  //   sendAppSensorSettings,
  //   appSettings,
  //   devTargetData,
  //   sensorLog,
  //   clearSensorLog,
  //   updateTarget,
  //   updateDevice,
  //   isUpdating,
  //   setUpdateTarget,
  //   connectedTargetList,
  //   updatePercentage,
  // } = useCoolFunBLE();

  // const handleScan = () => {
  //   startScan();
  // };
  return (
    // <TargetDataProvider
    //   data={{
    //     handleScan,
    //     list,
    //     connectPeripheral,
    //     connectedList,
    //     playerData,
    //     initTarget,
    //     setActive,
    //     resetTargetState,
    //     setAllColor,
    //     sendRawMessage,
    //     setBleLog,
    //     bleLog,
    //     sendAppSensorSettings,
    //     appSettings,
    //     devTargetData,
    //     sensorLog,
    //     clearSensorLog,
    //     updateTarget,
    //     updateDevice,
    //     isUpdating,
    //     setUpdateTarget,
    //     connectedTargetList,
    //   }}
    // >
    //   <Overlay visible={isScanning} title="Scanning..." />

    //   <UpdatingOverlay
    //     visible={isUpdating}
    //     title="Updating..."
    //     percentage={updatePercentage}
    //   />
    <DeviceDataProvider>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route
            exact
            path={route.path}
            key={index}
            element={
              <route.layout title={route.title} subTitle={route.subTitle}>
                <route.element />
              </route.layout>
            }
          />
        ))}
        {protectedRoutes.map((route, index) => (
          <Route
            exact
            path={route.path}
            key={index}
            element={
              <RequireAuth>
                <route.layout>
                  <route.element />
                </route.layout>
              </RequireAuth>
            }
          />
        ))}
      </Routes>
    </DeviceDataProvider>
  );
};

export default App;
