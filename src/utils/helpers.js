import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLocalData = async key => {
  return await AsyncStorage.getItem(key);
};

export const setLocalData = async (key, value) => {
  console.log("value=========+>", key, value)
  return await AsyncStorage.setItem(key, value);
};
