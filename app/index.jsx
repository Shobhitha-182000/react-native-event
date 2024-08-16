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
            onPress={() => navigation.navigate('Login')}
            backgroundColor="#1E90FF"  
            textColor="#FFFFFF" 
          />
          <CustomButton
            title="Signup"
            onPress={() => navigation.navigate('Signup')}
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
    backgroundColor: '#F5F5F5', // Light background color
  },
  textContainer: {
    marginBottom: 30,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333', // Dark text color
    shadowColor: '#000000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android shadow
  },
  buttonContainer: {
    flexDirection: 'row', // Align buttons in a row
    justifyContent: 'center', // Center buttons horizontally
    width: '80%', // Adjust width to fit the buttons
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5, // Space between buttons
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 4 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 10, // Shadow radius
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Index;


