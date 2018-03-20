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
  Badge,
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
// import { styles } from '../../assets/styles';

const icons = {
  apps: {
    activeFlg: false,
    badgeFlg: true,
    badgeCnt: 7,
  },
  camera: {
    activeFlg: true,
    badgeFlg: true,
    badgeCnt: 12,
  },
  contact: {
    activeFlg: false,
    badgeFlg: false,
    badgeCnt: 3,
  },
};

type TypeBadges = {
  obj: string,
  primaryFlg: boolean,
};

const Badges = ({ obj, primaryFlg = false }: TypeBadges) =>
  (icons[obj].badgeFlg ? (
    <Badge primary={primaryFlg}>
      <Text>{icons[obj].badgeCnt}</Text>
    </Badge>
  ) : (
    ''
  ));

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
        {/* <Title>{params.title}</Title> */}
        <Title>Dummy</Title>
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
        <Button
          active={icons.apps.activeFlg}
          badge={icons.apps.badgeFlg}
          vertical
        >
          <Badges obj="apps" />
          <Icon name="apps" />
          <Text>Apps</Text>
        </Button>

        <Button
          active={icons.camera.activeFlg}
          badge={icons.camera.badgeFlg}
          vertical
        >
          <Badges obj="camera" primaryFlg />
          <Icon name="camera" />
          <Text>Camera</Text>
        </Button>

        <Button
          active={icons.contact.activeFlg}
          badge={icons.contact.badgeFlg}
          vertical
        >
          <Badges obj="contact" />
          <Icon name="person" />
          <Text>Contact</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
);

export default HomeScreen;
