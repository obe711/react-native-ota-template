import authServices from './auth.service';
import { createAuthCaller } from './http.service';

export function checkForOta(deviceId, firmware) {
  const caller = createAuthCaller(authServices.userValue.token);
  return caller.put(`/devices/ota/${deviceId}`, { firmware }).then((response) => response.data);
}

export default {
  checkForOta,
};
