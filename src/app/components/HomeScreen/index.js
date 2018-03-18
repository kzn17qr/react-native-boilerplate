// @flow

import React from 'react';
import PropTypes from 'prop-types';
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
// import { styles } from '../../assets/styles';

// const HomeScreen = ({ navigation, navigation: { state: { params } } }) => (
const HomeScreen = ({ navigation }) => (
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
        <Button badge vertical>
          <Badge>
            <Text>1</Text>
          </Badge>
          <Icon name="apps" />
          <Text>Apps</Text>
        </Button>

        <Button active badge vertical>
          <Badge primary>
            <Text>18</Text>
          </Badge>
          <Icon name="camera" />
          <Text>Camera</Text>
        </Button>

        <Button vertical>
          <Icon name="person" />
          <Text>Contact</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
);

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HomeScreen;
