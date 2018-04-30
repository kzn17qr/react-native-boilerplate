// @flow

import React from 'react';
import { Button, Icon } from 'native-base';
import { connect } from 'react-redux';

import {
  // searchAction,
  searchAllAction,
  loading,
} from '../../actions/HomeHeaderAction';

type TypeInput = {
  laps: number,
  driverId: string,
};

type TypeProps = {
  onClick: Function,
  input: TypeInput,
  isFetched: boolean,
};

const SearchButton = ({ onClick, input, isFetched }: TypeProps) => (
  <Button
    transparent
    onPress={() => {
      onClick(input, isFetched);
    }}
  >
    <Icon name="search" />
  </Button>
);

const mapStateToProps = state => ({
  input: state.input,
  isFetched: state.search.isFetched,
});

const mapDispatchToProps = dispatch => ({
  onClick: (input, isFetched) => {
    dispatch(loading(true));
    // dispatch(searchAction(lapNumber));
    dispatch(searchAllAction(input, isFetched));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
