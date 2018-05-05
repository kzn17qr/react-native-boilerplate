// @flow

import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 32,
  },
  touchText: {
    fontSize: 24,
  },
  pickerText: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  pickerItemText: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  searchList: {
    paddingHorizontal: 2,
  },
  searchListItem: {
    height: 40,
    marginLeft: 0,
    marginTop: 0,
  },
  searchBody: {
    flexDirection: 'row',
  },
  searchTextNo: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    textAlign: 'right',
    width: 18,
  },
  searchDriver: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    marginHorizontal: 2,
  },
  searchTime: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    textAlign: 'right',
    marginHorizontal: 2,
    width: 105,
  },
});
