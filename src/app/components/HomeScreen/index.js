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
  // Segment,
  // Picker,
  // Spinner,
} from 'native-base';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { connect } from 'react-redux';

// import { badgeCountAction } from '../../actions/BadgeCountAction';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
import ApiService from '../../model/apiService';
import SearchText from './SearchText';
import { setLapNumber, setDriver } from '../../actions/HomeHeaderAction';

type TypeProps = {
  navigation: NavigationScreenProp<NavigationRoute>,
  // onClick: Function,
  // count: number,
  data: ApiService,
  isLoading: boolean,
  setLaps: Function,
  setDriverId: Function,
  laps: number,
  driverId: string,
};

// const HomeScreen = ({ navigation, navigation: { state: { params } } }) => (
const HomeScreen = ({
  navigation,
  // count,
  data,
  isLoading,
  setLaps,
  setDriverId,
  laps,
  driverId,
}: TypeProps) => (
  <Container>
    <Content padder>
      <Form>
        <Item style={{ height: 20 }}>
          <Input
            keyboardType="numeric"
            // style={{ fontSize: 12 }}
            placeholder="Input Lap Number"
            // ref={(ref) => {
            //   inputLaps = ref;
            // }}
            maxLength={2}
            value={`${laps}`}
            onChange={e => setLaps(e.nativeEvent.text)}
          />
          <Input
            // keyboardType="numeric"
            // style={{ fontSize: 12 }}
            placeholder="Input Driver"
            // ref={(ref) => {
            //   inputLaps = ref;
            // }}
            value={driverId}
            onChange={e => setDriverId(e.nativeEvent.text)}
          />
        </Item>
        {/* <Picker iosHeader="Select one" mode="dropdown">
          <Item label="1" value="1" />
        </Picker> */}
      </Form>
      {/* <Text>This is Content Section</Text> */}
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
    <HomeFooter />
  </Container>
);

HomeScreen.navigationOptions = {
  header: <HomeHeader />,
};

const mapStateToProps = state => ({
  count: state.badgeCount.count,
  data: state.search.data,
  isLoading: state.search.isLoading,
  laps: state.input.laps,
});

const mapDispatchToProps = dispatch => ({
  setLaps: laps => dispatch(setLapNumber(laps)),
  setDriverId: driverId => dispatch(setDriver(driverId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
