import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;


// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import CustomDrawer from '../components/CustomDrawer';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import ProfileScreen from '../screens/ProfileScreen';
// import MessagesScreen from '../screens/MessagesScreen';
// import MomentsScreen from '../screens/MomentsScreen';
// import SettingsScreen from '../screens/SettingsScreen';

// const Drawer = createDrawerNavigator();

// const AppStack = () => {
//   return (
//     <Drawer.Navigator
//       drawerContent={props => <CustomDrawer {...props} />}
//       screenOptions={{
//         headerShown: false,
//         drawerActiveBackgroundColor: '#aa18ea',
//         drawerActiveTintColor: '#fff',
//         drawerInactiveTintColor: '#333',
//         drawerLabelStyle: {
//           marginLeft: -25,
//           fontFamily: 'Roboto-Medium',
//           fontSize: 15,
//         },
//       }}>
//       <Drawer.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           drawerIcon: ({color}) => (
//             <Ionicons name="person-outline" size={22} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Messages"
//         component={MessagesScreen}
//         options={{
//           drawerIcon: ({color}) => (
//             <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Moments"
//         component={MomentsScreen}
//         options={{
//           drawerIcon: ({color}) => (
//             <Ionicons name="timer-outline" size={22} color={color} />
//           ),
//         }}
//       />
//       <Drawer.Screen
//         name="Settings"
//         component={SettingsScreen}
//         options={{
//           drawerIcon: ({color}) => (
//             <Ionicons name="settings-outline" size={22} color={color} />
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

// export default AppStack;
