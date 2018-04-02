// @flow

import React from 'react';
import { Badge, Text } from 'native-base';

import type { TypeBadges } from './types';

const Badges = ({ badgeCnt, ...rest }: TypeBadges) =>
  (badgeCnt > 0 ? (
    <Badge {...rest}>
      <Text>{badgeCnt}</Text>
    </Badge>
  ) : (
    ''
  ));

export default Badges;
