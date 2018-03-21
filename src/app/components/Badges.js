// @flow

import React from 'react';
import { Badge, Text } from 'native-base';

type TypeBadges = {
  badgeFlg: boolean,
  badgeCnt: number,
  badgeAttr?: any,
};

const Badges = ({ badgeFlg, badgeCnt, badgeAttr }: TypeBadges) =>
  (badgeFlg ? (
    <Badge {...badgeAttr}>
      <Text>{badgeCnt}</Text>
    </Badge>
  ) : (
    ''
  ));

Badges.defaultProps = {
  badgeAttr: null,
};

export default Badges;
