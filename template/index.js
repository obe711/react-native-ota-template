/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { NativeRouter } from 'react-router-native';
import App from './src/App';
import config from './config.json';
import { name as appName } from './app.json';

const Index = () => {
  return (
    <NativeRouter>
      <App />
    </NativeRouter>
  );
}



async function startApp() {
  AppRegistry.registerComponent(appName, () => Index);
}


if (config.withServer) {
  console.log('Running with API Server', config.withServer);
  startApp();
} else {
  console.log('DEV Mode', config.withServer);
  startApp();
}
