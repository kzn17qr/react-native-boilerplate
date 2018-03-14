// src/app/components/RootScreen/index.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

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

const HomeScreen = props => (
  <View style={styles.container}>
    <Text style={styles.text}>Home Screen</Text>
    <TouchableOpacity onPress={() => props.navigation.navigate('Edit')}>
      <Text>Edit</Text>
    </TouchableOpacity>
  </View>
);

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
