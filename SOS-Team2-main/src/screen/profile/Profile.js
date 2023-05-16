import {BackHandler, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {CustomDrawerComponent} from '../../utils/CustomDrawerComponent';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const ImagesAssets = {
  MenuDrawer: require('../../assets/img/ic_menu.png'),
};

export function Profile() {
  const navigation = useNavigation();

  function handleBackPress() {
    return true;
  }
  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.defaultPrevented();
    });
  }, [navigation]);

  return (
    <CustomDrawerComponent
      content={
        <>
          <TouchableOpacity
            style={styles.ContainerHeader}
            onPress={() => navigation.openDrawer()}>
            <Image style={styles.IconMenu} source={ImagesAssets.MenuDrawer} />
          </TouchableOpacity>
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  ContainerHeader: {
    width: 30,
    marginTop: 30,
    height: 40,
  },
  IconMenu: {
    width: 30,
    height: 40,
    marginStart: 20,
    marginTop: 10,
  },
});
