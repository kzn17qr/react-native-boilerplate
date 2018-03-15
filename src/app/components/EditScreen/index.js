// src/app/components/EditScreen/index.js

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

const EditScreen = props => (
  <View style={styles.container}>
    <Text style={styles.text}>Edit Screen</Text>
    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <Text>Back</Text>
    </TouchableOpacity>
  </View>
);

EditScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default EditScreen;
