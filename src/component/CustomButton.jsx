import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function CustomButton({ text, onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0F5E5B',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
