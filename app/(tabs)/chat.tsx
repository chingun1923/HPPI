import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
  <SafeAreaProvider>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaf5ff',
    flex: 1,
  },

});