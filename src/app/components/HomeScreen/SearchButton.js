// @flow

import React from 'react';
import { Button, Icon } from 'native-base';
import { connect } from 'react-redux';

import { searchAction } from '../../actions/HomeHeaderAction';

type TypeProps = {
  onClick: Function,
};

const SearchButton = ({ onClick }: TypeProps) => (
  <Button
    transparent
    onPress={() => {
      console.log('Search button tapped');
      onClick();
    }}
  >
    <Icon name="search" />
  </Button>
);

const mapDispatchToProps = dispatch => ({
  onClick() {
    dispatch(searchAction());
  },
});

export default connect(null, mapDispatchToProps)(SearchButton);
