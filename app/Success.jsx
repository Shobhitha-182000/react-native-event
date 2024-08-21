import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

export default function Success() {
  const [animationFinished, setAnimationFinished] = useState(false);
  const tickAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(tickAnimation, {
      toValue: 1,
      duration: 2000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start(() => setAnimationFinished(true));
  }, [tickAnimation]);

  const tickStyle = {
    transform: [
      {
        scale: tickAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
      {
        rotate: tickAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.tickContainer}>
        <Animated.View style={[styles.tick, tickStyle]} />
      </View>
      {animationFinished && <Text style={styles.text}>Thanks for Booking</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    padding: 20,
  },
  tickContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  tick: {
    width: 30,
    height: 30,
    borderWidth: 5,
    borderColor: '#00796b',
    borderRadius: 2,
    transform: [{ rotate: '45deg' }],
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
  },
});
