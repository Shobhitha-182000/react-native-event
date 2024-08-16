import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const CustomButton = ({ title, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor }]}>
    <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
  </TouchableOpacity>
);

const Index = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.textContainer, { opacity: fadeAnim }]}>
        <Text style={styles.text}>Welcome</Text>
      </Animated.View>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Login"
            onPress={() => navigation.navigate('Login')} // Navigate to Login
            backgroundColor="#1E90FF"  
            textColor="#FFFFFF" 
          />
          <CustomButton
            title="Signup"
            onPress={() => navigation.navigate('Signup')} // Ensure Signup is also included if needed
            backgroundColor="#32CD32" 
            textColor="#FFFFFF"  
          />
        </View>
      </Animated.View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  textContainer: {
    marginBottom: 30,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Index;
