/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

export const ImagesAssets = {
  logo: require('../../assets/img/img_splash.png'),
};

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('drawer');
    }, 1000);
    return clearTimeout();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={ImagesAssets.logo}
        resizeMode="stretch"
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 454,
    height: 277.5,
  },
});
