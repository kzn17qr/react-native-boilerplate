// src/app/components/RootScreen/index.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../../assets/styles';

const HomeScreen = props => (
  <View style={styles.container}>
    <Text style={styles.text}>Home Screen</Text>
    <TouchableOpacity onPress={() => props.navigation.navigate('Edit')}>
      <Text style={styles.touchText}>Edit</Text>
    </TouchableOpacity>
  </View>
);

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
