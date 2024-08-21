import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const TestDateTimePicker = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.openButton} onPress={() => setShow(true)}>
                <Text style={styles.buttonText}>Open Date Picker</Text>
            </TouchableOpacity>
            <Text style={styles.selectedDate}>Selected Date: {date.toDateString()}</Text>
            {show && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    openButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
    },
    closeButton: {
        backgroundColor: '#FF5733',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    selectedDate: {
        fontSize: 16,
        marginTop: 20,
    },
});

export default TestDateTimePicker;
