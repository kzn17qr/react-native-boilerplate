// @flow

import React from 'react';
import { Header, Left, Right, Body, Segment, Button, Text } from 'native-base';

import MenuButton from './MenuButton';
import SearchButton from './SearchButton';

const HomeHeader = () => (
  <Header hasTabs>
    <Left>
      <MenuButton />
    </Left>

    <Body>
      {/* <Title>{navigation.title}</Title> */}
      <Segment>
        <Button first>
          <Text>Seg1</Text>
        </Button>
        <Button last active>
          <Text>Seg2</Text>
        </Button>
      </Segment>
    </Body>

    <Right>
      <SearchButton />
    </Right>
  </Header>
);

export default HomeHeader;
