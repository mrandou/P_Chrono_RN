import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from "./style/AppStyle"
import { Text, View } from 'react-native';
import Clock from './components/Clock'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Clock/>
    </View>
  );
}
