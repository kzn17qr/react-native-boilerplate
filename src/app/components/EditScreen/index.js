// @flow

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';

import { styles } from '../../assets/styles';

type TypeProps = {
  navigation: NavigationScreenProp<NavigationRoute>,
};

const EditScreen = ({
  navigation,
  navigation: { state: { params } },
}: TypeProps) => (
  <View style={styles.container}>
    <Text style={styles.text}>Edit Screen</Text>
    <Text>{params.title}</Text>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.touchText}>Back</Text>
    </TouchableOpacity>
  </View>
);

export default EditScreen;
