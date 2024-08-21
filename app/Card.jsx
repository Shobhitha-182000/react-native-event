 
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Card = ({ title, description, location, imageSource, onEdit, onDelete, onBook }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.location}>{location}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onEdit} style={styles.button}>
            <Icon name="edit" size={23} color="seagreen" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete} style={styles.button}>
            <Icon name="trash" size={23} color="red" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onBook} style={styles.button}>
            <Icon name="book" size={23} color="darkgreen" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  location: {
    fontSize: 12,
    color: '#888',
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    // backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'black'
  },
});

export default Card;
