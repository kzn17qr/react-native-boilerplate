// app/components/RootScreen/index.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
  },
});

const Home = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Home Screen</Text>
    <TouchableOpacity onPress={Actions.editScr}>
      <Text>Edit</Text>
    </TouchableOpacity>
  </View>
);

export default Home;
