// @flow

import React from 'react';
import { Body, List, Text, Spinner, View, ListItem, Right } from 'native-base';

import ApiService from '../../model/apiService';
import { styles } from '../../assets/styles';

type TypeProps = {
  data: ApiService,
  isLoading: boolean,
};

const SearchText = ({ data, isLoading }: TypeProps) => {
  if (isLoading) return <Spinner />;
  if (data === null) return '';
  if (Object.keys(data).length === 0) return '';
  return (
    <View>
      <Text>[Race] {data.raceName}</Text>
      {/**/}
      <List
        dataArray={data.Laps[0].Timings}
        renderRow={item => (
          <ListItem style={styles.searchList}>
            <Body style={styles.searchBody}>
              <Text style={styles.searchTextNo}>{item.position}</Text>

              <Text>{item.driverId}</Text>
            </Body>

            <Right>
              <Text>{item.time}</Text>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default SearchText;
