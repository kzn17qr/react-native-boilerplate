// @flow

import React from 'react';
import { Button, Icon } from 'native-base';
import { connect } from 'react-redux';

import { badgeCountAction } from '../../actions/BadgeCountAction';

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
    dispatch(badgeCountAction(1));
  },
});

export default connect(null, mapDispatchToProps)(SearchButton);
