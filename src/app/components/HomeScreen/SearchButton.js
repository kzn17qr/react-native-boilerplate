// @flow

import React from 'react';
import { Button, Icon } from 'native-base';
import { connect } from 'react-redux';

import { searchAction, loading } from '../../actions/HomeHeaderAction';

type TypeProps = {
  onClick: Function,
  laps: number,
};

const SearchButton = ({ onClick, laps }: TypeProps) => (
  <Button
    transparent
    onPress={() => {
      onClick(laps);
    }}
  >
    <Icon name="search" />
  </Button>
);

const mapStateToProps = state => ({
  laps: state.input.laps,
});

const mapDispatchToProps = dispatch => ({
  onClick: (lapNumber) => {
    dispatch(loading(true));
    dispatch(searchAction(lapNumber));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
