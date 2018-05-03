// @flow

import React from 'react';
import { Body, List, Text, Spinner, View, ListItem, Right } from 'native-base';

import { LapEntity } from '../../model/apiService';
import { styles } from '../../assets/styles';

type TypeProps = {
  data: LapEntity,
  isLoading: boolean,
};

const SearchText = ({ data, isLoading }: TypeProps) => {
  if (isLoading) return <Spinner />;
  if (data === null) return '';
  if (Object.keys(data).length === 0) return '';
  return (
    <View>
      <Text>
        [Race] {data.raceName} [Laps] {data.GapData[0].laps}
      </Text>
      <List
        style={styles.searchList}
        // dataArray={data.Laps[0].Timings}
        dataArray={data.GapData}
        renderRow={item => (
          <ListItem style={styles.searchListItem}>
            <Body style={styles.searchBody}>
              <Text style={styles.searchTextNo}>{item.position}</Text>

              <Text style={styles.searchDriver}>{item.driverId}</Text>
            </Body>

            <Right>
              {/* <Text>{item.time}</Text> */}
              <Text style={styles.searchTime}>
                {item.position === '1' ? item.times : item.gap}
              </Text>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default SearchText;
