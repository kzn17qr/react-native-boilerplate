// @flow

import React from 'react';
import { Button, Icon } from 'native-base';
import { connect } from 'react-redux';

import { badgeCountAction } from '../../actions/BadgeCountAction';

type TypeProps = {
  onClick: Function,
};

const HeaderButton = ({ onClick }: TypeProps) => (
  <Button
    transparent
    onPress={() => {
      onClick();
    }}
  >
    <Icon name="menu" />
  </Button>
);

const mapDispatchToProps = dispatch => ({
  onClick() {
    dispatch(badgeCountAction(1));
  },
});

export default connect(null, mapDispatchToProps)(HeaderButton);
