import {AlertModal} from '../../../Components';

const UpdateAlertModal = ({onPressUpdate, onPressCancel}) => {
  return AlertModal(
    'Update Available',
    'You have an update available for your target.',
    [
      {
        text: 'Cancel',
        onPress: () => onPressUpdate(),
        style: 'cancel',
      },
      {
        text: 'Update Now',
        onPress: () => onPressCancel(),
      },
    ],
    {cancelable: false},
  );
};

export default UpdateAlertModal;
