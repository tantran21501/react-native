import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {CustomDrawerContent} from '../utils/CustomDrawerContent';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screen/splash/Splash';
import {Profile} from '../screen/profile/Profile';

const Drawer = createDrawerNavigator();
const AppStack = createNativeStackNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          flex: 1,
          width: '50%',
          backgroundColor: '#2F4050',
        },
        drawerType: 'slide',
        overlayColor: 'transparent',
        sceneContainerStyle: {
          backgroundColor: '#2F4050',
        },
      }}
      useLegacyImplementation
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Profile" component={Profile} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

export function AppNavigation() {
  return (
    <AppStack.Navigator
      initialRouteName="Splash"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <AppStack.Screen name="splash" component={Splash} />
      <AppStack.Screen name="drawer" component={AppDrawer} />
    </AppStack.Navigator>
  );
}
