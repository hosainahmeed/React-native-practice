import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Contact = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Contact</Text>
      </View>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
