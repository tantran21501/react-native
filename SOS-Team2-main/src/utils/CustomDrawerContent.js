import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {StyleSheet, View} from 'react-native';
import React from 'react';

//TODO: Add more item default in future
export function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <DrawerItemList {...props} />
        <DrawerItem label="SignOut" onPress={() => alert('Sign Out')} />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  containerCustomDrawer: {
    flex: 1,
  },
});
