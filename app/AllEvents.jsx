import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import Card from './Card';

const cardData = [
  {
    id: '1',
    title: 'Event 1',
    description: 'Description for Event 1',
    location: 'Bengaluru',
    imageSource: require('../assets/ev.jpg')
  },
  {
    id: '2',
    title: 'Event 2',
    description: 'Description for Event 2',
    location: 'HYD',
    imageSource: require('../assets/awards.jpg'),
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

const AllEvents = () => {
  const router = useRouter();

  const handleEdit = () => {
    
    router.push('/AddEventScreen')
  
  };

  const handleDelete = (id) => {
    console.log(`Delete event with id: ${id}`);
   
  };

  const handleBook = () => {
    router.push('/Profit')
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      
        <Text style={styles.title}>All Events</Text>
      </View>
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          location={card.location}
          imageSource={card.imageSource}
          onEdit={() => handleEdit(card.id)}
          onDelete={() => handleDelete(card.id)}
          onBook={() => handleBook(card.id)}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'midlightblue',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default AllEvents;
