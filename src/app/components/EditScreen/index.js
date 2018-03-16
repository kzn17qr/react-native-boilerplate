// src/app/components/EditScreen/index.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../../assets/styles';

const EditScreen = props => (
  <View style={styles.container}>
    <Text style={styles.text}>Edit Screen</Text>
    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <Text style={styles.touchText}>Back</Text>
    </TouchableOpacity>
  </View>
);

EditScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default EditScreen;
