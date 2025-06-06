import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function BarndIcon() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Image style={styles.image} source={require('../assets/auth.png')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 50,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    color: '#111',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

