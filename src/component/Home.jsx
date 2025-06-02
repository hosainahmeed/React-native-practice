import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#111',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

