import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigation = useNavigation();

    const handleChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
      navigation.navigate('Display')
        try {
            const url = "http://localhost:3000/login";
            const { data: res } = await axios.post(url, formData);
            console.log(res);

            // Save token and user info
            await AsyncStorage.setItem('token', res.token);
            await AsyncStorage.setItem('username', res.user.username);

            Toast.show({
                type: 'success',
                position: 'top',
                text1: 'Login successful!',
                text2: 'Redirecting to dashboard...'
            });

            setTimeout(() => {
                navigation.navigate("Side"); // Adjust this route name as per your navigator configuration
            }, 2000);
        } catch (error) {
            console.error('Error logging in:', error);
            const errorMessage = error.response?.data?.message || 'An error occurred during login. Please try again.';
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Login failed',
                text2: errorMessage
            });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={formData.email}
                onChangeText={(text) => handleChange('email', text)}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={formData.password}
                onChangeText={(text) => handleChange('password', text)}
                autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>
                for Displaying Event </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Display")}>
                    <Text style={styles.link}>Click here</Text>
                </TouchableOpacity>
            </View>
            <Toast />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F5F5F5'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20
    },
    input: {
        height: 45,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        width: '100%',
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF'
    },
    button: {
        backgroundColor: '#1E90FF',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        width: '100%',
        marginBottom: 20
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Login;
