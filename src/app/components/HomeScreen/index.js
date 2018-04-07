// @flow

import React from 'react';
import {
  Container,
  Content,
  Button,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label,
  ActionSheet,
  // Spinner,
} from 'native-base';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { connect } from 'react-redux';

// import { badgeCountAction } from '../../actions/BadgeCountAction';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
import ApiService from '../../model/apiService';
import SearchText from './SearchText';

type TypeProps = {
  navigation: NavigationScreenProp<NavigationRoute>,
  // onClick: Function,
  count: number,
  data: ApiService,
  isLoading: boolean,
};

// const HomeScreen = ({ navigation, navigation: { state: { params } } }) => (
const HomeScreen = ({
  navigation, count, data, isLoading,
}: TypeProps) => (
  <Container>
    <Content padder>
      <Text>This is Content Section</Text>
      <SearchText data={data} isLoading={isLoading} />
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
    <HomeFooter count={count} />
  </Container>
);

HomeScreen.navigationOptions = {
  header: <HomeHeader />,
};

const mapStateToProps = state => ({
  count: state.badgeCount.count,
  data: state.search.data,
  isLoading: state.search.isLoading,
});

// const mapDispatchToProps = dispatch => ({
//   onClick: () => dispatch(badgeCountAction(1)),
// });

export default connect(mapStateToProps, null)(HomeScreen);
