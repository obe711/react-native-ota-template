import {createContext, useReducer, useContext} from 'react';

const initialState = {
  isUpdating: false,
  foundDevicesList: [],
  isScanning: false,
  connectedUUIDs: [],
  deviceToUpdate: null,

  //updateDevice: null,
  updatePercentage: 0,
  connectedDeviceList: [],
};

/**
 * Dispatch actions to the reducer
 */
const SET_IS_UPDATING = 'SET_IS_UPDATING';
const SET_FOUND_DEVICES_LIST = 'SET_FOUND_DEVICES_LIST';
const SET_IS_SCANNING = 'SET_IS_SCANNING';
const SET_CONNECTED_UUIDS = 'SET_CONNECTED_UUIDS';
const SET_DEVICE_TO_UPDATE = 'SET_DEVICE_TO_UPDATE';

/**
 * Reducer function
 * @param {object} state
 * @param {object} action
 * @returns
 */
export function reducer(state, action) {
  const {type, payload} = action;
  switch (type) {
    case SET_IS_UPDATING:
      return {
        ...state,
        isUpdating: payload.isUpdating,
      };
    case SET_FOUND_DEVICES_LIST:
      return {
        ...state,
        foundDevicesList: payload.foundDevicesList,
      };
    case SET_IS_SCANNING:
      return {
        ...state,
        isScanning: payload.isScanning,
      };
    case SET_CONNECTED_UUIDS:
      return {
        ...state,
        connectedUUIDs: payload.connectedUUIDs,
      };
    case SET_DEVICE_TO_UPDATE:
      return {
        ...state,
        deviceToUpdate: payload.deviceToUpdate,
      };
    default:
      return state;
  }
}

/**
 * Device Data Hook
 * @returns {object} state
 */
export const useDeviceData = () => {
  const context = useContext(DeviceData);
  if (context === undefined) {
    throw new Error('useDeviceData must be used within a DeviceDataProvider');
  }

  const setIsUpdating = isUpdating => {
    context.dispatch({
      type: SET_IS_UPDATING,
      payload: {
        isUpdating,
      },
    });
  };
  const setFoundDevicesList = foundDevicesList => {
    context.dispatch({
      type: SET_FOUND_DEVICES_LIST,
      payload: {
        foundDevicesList,
      },
    });
  };
  const setIsScanning = isScanning => {
    context.dispatch({
      type: SET_IS_SCANNING,
      payload: {
        isScanning,
      },
    });
  };
  const setConnectedUUIDs = connectedUUIDs => {
    context.dispatch({
      type: SET_CONNECTED_UUIDS,
      payload: {
        connectedUUIDs,
      },
    });
  };
  const setDeviceToUpdate = deviceToUpdate => {
    context.dispatch({
      type: SET_DEVICE_TO_UPDATE,
      payload: {
        deviceToUpdate,
      },
    });
  };

  const updateDevice = () => {
    console.log('updateDevice');
  };
  const handleScan = () => {
    console.log('handleScan');
  };

  return {
    ...context,
    setIsUpdating,
    setFoundDevicesList,
    setIsScanning,
    setConnectedUUIDs,
    setDeviceToUpdate,
    updateDevice,
    handleScan,
  };
};

/**
 * Device context
 */
export const DeviceData = createContext();

/**
 * Device Data Provider
 * @param {*} children
 * @returns <DeviceData.Provider>
 */
export const DeviceDataProvider = ({children}) => {
  const [context, dispatch] = useReducer(reducer, initialState);
  return (
    <DeviceData.Provider value={{...context, dispatch}}>
      {children}
    </DeviceData.Provider>
  );
};
