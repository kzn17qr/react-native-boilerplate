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
  // driverId: string,
};

type TypeProps = {
  onClick: Function,
  input: TypeInput,
  fetchedRoundNumber: number,
};

const SearchButton = ({ onClick, input, fetchedRoundNumber }: TypeProps) => (
  <Button
    transparent
    onPress={() => {
      onClick(input, fetchedRoundNumber);
    }}
  >
    <Icon name="search" />
  </Button>
);

const mapStateToProps = state => ({
  input: state.input,
  fetchedRoundNumber: state.search.fetchedRoundNumber,
});

const mapDispatchToProps = dispatch => ({
  onClick: (input, fetchedRoundNumber) => {
    dispatch(loading(true));
    // dispatch(searchAction(lapNumber));
    // console.log(`fetchedRoundNumber=${fetchedRoundNumber} input.round=${input.round}`);
    dispatch(searchAllAction(input, fetchedRoundNumber));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
