// @flow

import React from 'react';
import { Button, Icon, Text } from 'native-base';

import Badges from './Badges';

type TypeButtonWithBadge = {
  iconName: string,
  btnText?: string,
  active?: boolean,
  badgeCnt: number,
};

const ButtonWithBadge = ({
  iconName,
  btnText,
  active,
  badgeCnt,
  ...rest
}: TypeButtonWithBadge) => (
  <Button vertical active={active} badge={badgeCnt > 0}>
    <Badges badgeCnt={badgeCnt} {...rest} />
    <Icon name={iconName} />
    <Text>{btnText}</Text>
  </Button>
);

export default ButtonWithBadge;
