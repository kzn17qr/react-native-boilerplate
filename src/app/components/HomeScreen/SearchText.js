// @flow

import React from 'react';
import { Text, Spinner, View } from 'native-base';

import ApiService from '../../model/apiService';

type TypeProps = {
  data: ApiService,
  isLoading: boolean,
};

const SearchText = ({ data, isLoading }: TypeProps) =>
  (isLoading ? (
    <Spinner />
  ) : (
    <View>
      <Text>{data.series}</Text>
      <Text>{data.round}</Text>
      <Text>{data.raceDate}</Text>
      <Text>{data.raceName}</Text>
    </View>
  ));

export default SearchText;
