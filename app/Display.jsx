import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './Card'; // Adjust the path as needed

const cardData = [
  {
    id: '1',
    title: 'Event 1',
    description: 'Description for Event 1',
    location: 'Bengaluru',
    imageSource: require('../assets/ev.jpg'), // Adjust the path to your images
  },
  {
    id: '2',
    title: 'Event 2',
    description: 'Description for Event 2',
    location: 'HYD',
   imageSource: require('../assets/team building event.jpg'), // Adjust the path to your images
  },
  {
    id: '3',
    title: 'Event 3',
    description: 'Description for Event 3',
    location: 'Chennai',
 imageSource: require('../assets/awards.jpg'),
  },
  {
    id: '4',
    title: 'Event 4',
    description: 'Description for Event 4',
    location: 'Delhi',
   imageSource: require('../assets/ev.jpg'),
  },
];

const Display = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>All Events</Text>
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          location={card.location}
          imageSource={card.imageSource}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Display;
