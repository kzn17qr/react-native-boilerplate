// @flow

import React from 'react';
import {
  Container,
  Header,
  Title,
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
  navigation: NavigationScreenProp<NavigationRoute>,
};

// const HomeScreen = ({ navigation, navigation: { state: { params } } }) => (
const HomeScreen = ({ navigation }: TypeProps) => (
  <Container>
    <Header hasTabs>
      <Left>
        <Button transparent onPress={() => console.log('Menu button tapped.')}>
          <Icon name="menu" />
        </Button>
      </Left>

      <Body>
        <Title>{navigation.title}</Title>
      </Body>

      <Right>
        <Button transparent onPress={() => console.log('Search button tapped')}>
          <Icon name="search" />
        </Button>
      </Right>
    </Header>

    <Segment>
      <Button first>
        <Text>Seg1</Text>
      </Button>
      <Button last active>
        <Text>Seg2</Text>
      </Button>
    </Segment>

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
          // btnText="Apps"
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
          badgeCnt={icons.contact.badgeCnt}
        />
      </FooterTab>
    </Footer>
  </Container>
);

export default HomeScreen;
