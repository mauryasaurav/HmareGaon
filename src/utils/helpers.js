import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLocalData = async key => {
  return await AsyncStorage.getItem(key);
};

export const setLocalData = async (key, value) => {
  return await AsyncStorage.setItem(key, value);
};

export const maskSensitiveInfo = info => {
  const lengthToShow = 4;
  if (typeof info !== 'string') {
    return '';
  }

  const visiblePart =
    '*'.repeat(info.length - lengthToShow) + info.slice(-lengthToShow);
  return " " + visiblePart;
};