// @flow

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import PropTypes from 'prop-types';

import { styles } from '../../assets/styles';

type Props = {
  navigation: NavigationScreenProp<NavigationRoute>,
};

const EditScreen = ({
  navigation,
  navigation: { state: { params } },
}: Props) => (
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
