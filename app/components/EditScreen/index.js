// app/components/EditScreen/index.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

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

const Edit = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Edit Screen</Text>
  </View>
);

export default Edit;
