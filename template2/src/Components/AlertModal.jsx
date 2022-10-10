import {Alert} from 'react-native';

const AlertModal = (title, description, buttonSchema, options = {}) =>
  Alert.alert(title, description, buttonSchema, options);

export default AlertModal;
