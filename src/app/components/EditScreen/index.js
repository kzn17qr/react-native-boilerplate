// src/app/components/EditScreen/index.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from '../../assets/styles';

const EditScreen = ({ navigation, navigation: { state: { params } } }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Edit Screen</Text>
    <Text>{params.title}</Text>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.touchText}>Back</Text>
    </TouchableOpacity>
  </View>
);

EditScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default EditScreen;
