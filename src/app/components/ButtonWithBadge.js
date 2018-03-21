// @flow

import React from 'react';
import { Button, Icon, Text } from 'native-base';

import Badges from './Badges';

type TypeButtonWithBadge = {
  iconName: string,
  btnText: string,
  activeFlg: boolean,
  badgeFlg: boolean,
  badgeCnt: number,
  badgeAttr?: any,
};

const ButtonWithBadge = ({
  iconName,
  btnText,
  activeFlg,
  badgeFlg,
  badgeCnt,
  badgeAttr,
}: TypeButtonWithBadge) => (
  <Button active={activeFlg} badge={badgeFlg} vertical>
    <Badges badgeFlg={badgeFlg} badgeCnt={badgeCnt} badgeAttr={badgeAttr} />
    <Icon name={iconName} />
    <Text>{btnText}</Text>
  </Button>
);

ButtonWithBadge.defaultProps = {
  badgeAttr: null,
};

export default ButtonWithBadge;
