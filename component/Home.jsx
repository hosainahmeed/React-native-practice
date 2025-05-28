/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  const {width} = Dimensions.get('window');
  const data = [
    {
      id: 1,
      title: 'About',
      description: 'About Page Description',
      url: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    },
    {
      id: 2,
      title: 'Contact',
      description: 'Contact Page Description',
      url: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    },
    {
      id: 3,
      title: 'Help',
      description: 'Help Page Description',
      url: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    },
    {
      id: 4,
      title: 'Profile',
      description: 'Profile Page Description',
      url: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    },
    {
      id: 5,
      title: 'Setting',
      description: 'Setting Page Description',
      url: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    },
    {
      id: 6,
      title: 'Home',
      description: 'Home Page Description',
      url: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    },
    {
      id: 7,
      title: 'Detail',
      description: 'Detail Page Description',
      url: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    },
    {
      id: 8,
      title: 'Login',
      description: 'Login Page Description',
      url: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    },
    {
      id: 9,
      title: 'Register',
      description: 'Register Page Description',
      url: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    },
    {
      id: 10,
      title: 'Forgot Password',
      description: 'Forgot Password Page Description',
      url: 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        gap={10}
        contentContainerStyle={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
          columnGap: 10,
          padding: 10,
          rowGap:10,
        }}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(item.title)}>
            <View style={[styles.card, {width: (width - 40) / 2}]}>
              <Image source={{uri: item.url}} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description.slice(0, 20)}...</Text>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
});
