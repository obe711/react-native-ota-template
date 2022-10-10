/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { NativeRouter } from 'react-router-native';
import App from './src/App';
import config from './config.json';

const APP_NAME = 'ProjectName';

const Index = () => {
  return (
    <NativeRouter>
      <App />
    </NativeRouter>
  );
}



async function startApp() {
  AppRegistry.registerComponent(APP_NAME, () => Index);
}


if (config.withServer) {
  console.log('Running with API Server', config.withServer);
  startApp();
} else {
  console.log('DEV Mode', config.withServer);
  startApp();
}