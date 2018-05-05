// @flow

import React from 'react';
import { Header, Left, Right, Body, Segment, Button, Text } from 'native-base';

import MenuButton from './MenuButton';
import SearchButton from './SearchButton';

type TypeProps = {
  nav: Function,
};

const HomeHeader = ({ nav }: TypeProps) => (
  <Header hasTabs>
    <Left>
      <MenuButton />
    </Left>

    <Body>
      {/* <Title>{navigation.title}</Title> */}
      <Segment>
        <Button first active disabled>
          <Text>-</Text>
        </Button>
        <Button last onPress={nav}>
          <Text>Gap</Text>
        </Button>
      </Segment>
    </Body>

    <Right>
      <SearchButton />
    </Right>
  </Header>
);

export default HomeHeader;
