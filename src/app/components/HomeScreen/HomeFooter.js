// @flow

import React from 'react';
import { Footer, FooterTab } from 'native-base';
import { connect } from 'react-redux';

import ButtonWithBadge from '../ButtonWithBadge';

const icons = {
  apps: {
    activeFlg: false,
    badgeCnt: 2,
  },
  camera: {
    activeFlg: true,
    badgeCnt: 1,
  },
  contact: {
    activeFlg: false,
    badgeCnt: 0,
  },
};

type TypeProps = {
  count: number,
};

const HomeFooter = ({ count }: TypeProps) => (
  <Footer>
    <FooterTab>
      <ButtonWithBadge
        iconName="apps"
        btnText="Apps"
        active={icons.apps.activeFlg}
        badgeCnt={icons.apps.badgeCnt}
      />

      <ButtonWithBadge
        iconName="camera"
        btnText="Camera"
        active={icons.camera.activeFlg}
        badgeCnt={icons.camera.badgeCnt}
        info
      />

      <ButtonWithBadge
        iconName="person"
        btnText="Contact"
        active={icons.contact.activeFlg}
        // badgeCnt={icons.contact.badgeCnt}
        badgeCnt={count}
      />
    </FooterTab>
  </Footer>
);

const mapStateToProps = state => ({
  count: state.badgeCount.count,
});

export default connect(mapStateToProps, null)(HomeFooter);
