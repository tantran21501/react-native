import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {Extrapolate} from 'react-native-reanimated';

export function CustomDrawerComponent(props) {
  const progress = useDrawerProgress();

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
    extrapolate: Extrapolate.CLAMP,
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 20],
    extrapolate: Extrapolate.CLAMP,
  });
  const animatedStyle = {
    borderRadius,
    transform: [{scale}],
  };
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {props.content}
    </Animated.View>
  );
}

//TODO: can change dynamic color in future
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
