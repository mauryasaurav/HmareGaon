import Toast from 'react-native-toast-message';

function useToastHook() {
  return (label, message, status = 'error') => {
    return Toast.show({
      type: status,
      text1: label,
      text2: message,
    });
  };
}

export default useToastHook;
