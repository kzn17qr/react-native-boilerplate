// @flow

import React from 'react';
import { Badge, Text } from 'native-base';

type TypeBadges = {
  badgeCnt: number,
};

const Badges = ({ badgeCnt, ...rest }: TypeBadges) =>
  (badgeCnt > 0 ? (
    <Badge {...rest}>
      <Text>{badgeCnt}</Text>
    </Badge>
  ) : (
    ''
  ));

export default Badges;
