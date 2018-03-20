// @flow

import React from 'react';
import { Badge, Text } from 'native-base';

type TypeBadges = {
  badgeFlg: boolean,
  badgeCnt: number,
  primaryFlg?: boolean,
};

const Badges = ({ badgeFlg, badgeCnt, primaryFlg = false }: TypeBadges) =>
  (badgeFlg ? (
    <Badge primary={primaryFlg}>
      <Text>{badgeCnt}</Text>
    </Badge>
  ) : (
    ''
  ));

Badges.defaultProps = {
  primaryFlg: false,
};

export default Badges;
