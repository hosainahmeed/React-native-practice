import { StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../screen/CustomButton';
import BarndIcon from './BarndIcon';

export default function Home() {
  return (
    <SafeAreaView>
      <BarndIcon />
      <CustomButton text="Click Here" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
