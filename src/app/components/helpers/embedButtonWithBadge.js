// @flow

import React from 'react';
import type { ComponentType } from 'react';
import { Button, Icon, Text } from 'native-base';

import type { TypeButtonWithBadge, TypeBadges } from '../types';

const embedButtonWithBadge = (WrappedComponent: ComponentType<TypeBadges>) => ({
  iconName,
  btnText,
  active,
  badgeCnt,
  ...rest
}: TypeButtonWithBadge) => (
  <Button vertical active={active} badge={badgeCnt > 0}>
    <WrappedComponent badgeCnt={badgeCnt} {...rest} />
    <Icon name={iconName} />
    <Text>{btnText}</Text>
  </Button>
);

export default embedButtonWithBadge;
