import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';

export default function Profit() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={showDatepicker}>
          <Text style={styles.buttonText}>Choose a date!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={showTimepicker}>
          <Text style={styles.buttonText}>Choose time!</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.selectedDate}>
        Selected: {date.toLocaleString()}
      </Text>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      
      <View style={styles.bookNowButtonContainer}>
        <TouchableOpacity style={styles.bookNowButton} onPress={() => router.push('/Success')}>
          <Text style={styles.bookNowButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#007BFF', // Blue color for the buttons
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedDate: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 15,
    color: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    width: '100%',
  },
  bookNowButtonContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  bookNowButton: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: 'green',  
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookNowButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
