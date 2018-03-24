// @flow

import React from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label,
  ActionSheet,
  Segment,
  Spinner,
} from 'native-base';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { connect } from 'react-redux';

import ButtonWithBadge from '../ButtonWithBadge';
// import { badgeCountAction } from '../../actions/BadgeCountAction';
import MenuButton from './MenuButton';
import SearchButton from './SearchButton';

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
  navigation: NavigationScreenProp<NavigationRoute>,
  // onClick: Function,
  count: number,
};

// const HomeScreen = ({ navigation, navigation: { state: { params } } }) => (
const HomeScreen = ({ navigation, count }: TypeProps) => (
  <Container>
    <Content padder>
      <Text>This is Content Section</Text>
      <Spinner />
      <Form>
        <Item floatingLabel>
          <Label>UserName</Label>
          <Input />
        </Item>
        <Item>
          <Input placeholder="Password" />
        </Item>
      </Form>

      <Button
        bordered
        transparent
        block
        iconLeft
        onPress={() => navigation.navigate('Edit', { title: 'Edit' })}
      >
        <Icon name="create" />
        <Text>Edit</Text>
      </Button>

      <Button
        block
        onPress={() =>
          ActionSheet.show(
            {
              options: ['Option 0', 'Option 1', 'Cancel'],
              cancelButtonIndex: 2,
              title: 'Testing ActionSheet',
            },
            (buttonIndex) => {
              console.log(buttonIndex);
            },
          )
        }
      >
        <Text>ActionSheet</Text>
      </Button>
    </Content>

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
  </Container>
);

HomeScreen.navigationOptions = {
  header: (
    <Header hasTabs>
      <Left>
        <MenuButton />
      </Left>

      <Body>
        {/* <Title>{navigation.title}</Title> */}
        <Segment>
          <Button first>
            <Text>Seg1</Text>
          </Button>
          <Button last active>
            <Text>Seg2</Text>
          </Button>
        </Segment>
      </Body>

      <Right>
        {/* <Button transparent onPress={() => console.log('Search button tapped')}>
          <Icon name="search" />
        </Button> */}
        <SearchButton />
      </Right>
    </Header>
  ),
};

const mapStateToProps = state => ({
  count: state.badgeCount.count,
});

// const mapDispatchToProps = dispatch => ({
//   onClick() {
//     dispatch(badgeCountAction(1));
//   },
// });

export default connect(mapStateToProps, null)(HomeScreen);
