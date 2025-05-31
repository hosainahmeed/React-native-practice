import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

export default function BarndIcon() {
  return (
    <View>
      <Image source={require('../assets/icons.svg')} />
    </View>
  );
}

const styles = StyleSheet.create({});

