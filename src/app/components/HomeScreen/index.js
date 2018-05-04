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
  Picker,
  // Label,
  // ActionSheet,
  // Segment,
  // Picker,
  // Spinner,
} from 'native-base';
// import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { connect } from 'react-redux';
import { lifecycle } from 'recompose';

// import { badgeCountAction } from '../../actions/BadgeCountAction';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
import { LapEntity, ScheduleEntity } from '../../model/apiService';
import SearchText from './SearchText';
import {
  setLapNumber,
  setRoundNumber,
  // setDriver,
  getScheduleAction,
} from '../../actions/HomeHeaderAction';
import { styles } from '../../assets/styles';

type TypeProps = {
  // navigation: NavigationScreenProp<NavigationRoute>,
  // onClick: Function,
  // count: number,
  data: LapEntity,
  isLoading: boolean,
  setLaps: Function,
  setRound: Function,
  laps: number,
  round: number,
  schedules: ScheduleEntity,
};

// const HomeScreen = ({ navigation, navigation: { state: { params } } }) => (
const HomeScreenWithoutLC = ({
  // navigation,
  // count,
  data,
  isLoading,
  setLaps,
  setRound,
  laps,
  round,
  schedules,
}: TypeProps) => (
  <Container>
    <Content padder>
      <Form>
        <Picker
          mode="dropdown"
          iosIcon={<Icon name="ios-arrow-down-outline" />}
          placeholder="Select Race"
          onValueChange={value => setRound(value)}
          selectedValue={`${round}`}
          textStyle={styles.pickerText}
          itemTextStyle={styles.pickerItemText}
        >
          {Object.keys(schedules).length === 0
            ? ''
            : schedules.Races.map(v => (
              <Picker.Item
                label={v.Circuit.Location.country}
                key={v.round}
                value={v.round}
              />
              ))}
        </Picker>
        <Text style={styles.pickerText}>
          {Object.keys(schedules).length === 0
            ? ''
            : `${schedules.Races[round - 1].Circuit.circuitName} ${
                schedules.Races[round - 1].date
              }`}
        </Text>
        <Item>
          <Input
            keyboardType="numeric"
            style={{ fontSize: 14 }}
            placeholder="Input Lap Number"
            // ref={(ref) => {
            //   inputLaps = ref;
            // }}
            maxLength={2}
            value={`${laps}`}
            onChange={e => setLaps(Number(e.nativeEvent.text))}
          />
          {/* <Input
            // keyboardType="numeric"
            // style={{ fontSize: 12 }}
            placeholder="Input Driver"
            // ref={(ref) => {
            //   inputLaps = ref;
            // }}
            value={driverId}
            onChange={e => setDriverId(e.nativeEvent.text)}
          /> */}

          <Button
            transparent
            onPress={() => {
              if (laps === 1) return;
              setLaps(Number(laps) - 1);
            }}
          >
            <Icon theme={{ iconFamily: 'Ionicons' }} name="arrow-back" />
          </Button>
          <Button
            transparent
            onPress={() => {
              setLaps(Number(laps) + 1);
            }}
          >
            <Icon theme={{ iconFamily: 'Ionicons' }} name="arrow-forward" />
          </Button>
        </Item>
        {/* <Picker iosHeader="Select one" mode="dropdown">
          <Item label="1" value="1" />
        </Picker> */}
      </Form>
      {/* <Text>This is Content Section</Text> */}
      <SearchText data={data} isLoading={isLoading} />
      {/* <Form>
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
      </Button> */}
    </Content>
    <HomeFooter />
  </Container>
);

const HomeScreen = lifecycle({
  componentDidMount() {
    const { setSchedule } = this.props;
    setSchedule(2018);
  },
})(HomeScreenWithoutLC);

HomeScreen.navigationOptions = {
  header: <HomeHeader />,
};

const mapStateToProps = state => ({
  count: state.badgeCount.count,
  data: state.search.data,
  isLoading: state.search.isLoading,
  laps: state.input.laps,
  round: state.input.round,
  schedules: state.init.data,
});

const mapDispatchToProps = dispatch => ({
  setSchedule: year => dispatch(getScheduleAction(year)),
  setLaps: laps => dispatch(setLapNumber(laps)),
  setRound: round => dispatch(setRoundNumber(round)),
  // setDriverId: driverId => dispatch(setDriver(driverId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
