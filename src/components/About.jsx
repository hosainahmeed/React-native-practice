/* eslint-disable eol-last */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View>
      <Text style={styles.text}>About</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
    text:{
        color:'red',
        fontSize:20,
        fontWeight:'bold',
    },
});