// @flow

import React from 'react';
import { Container, Content } from 'native-base';
import { View, Text, TouchableOpacity, ART, Dimensions } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { connect } from 'react-redux';

import { styles } from '../../assets/styles';
import { LapEntity } from '../../model/apiService';

type TypeSecLabel = {
  x: number,
  y: number,
  sec: number,
};

type TypeProps = {
  navigation: NavigationScreenProp<NavigationRoute>,
  data: LapEntity,
};

const { Surface, Group, Shape } = ART;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height * 3;
const [baseX, baseY] = [5, 10];
const [barSH, barEH, barV] = [200, 100, 2];
const [baseTextX, baseTextY] = [210, 3];
const marginHeight = 16;
const secAry = [];

const SecLabel = ({ x, y, sec }: TypeSecLabel) => (
  <ART.Text font={'10px "Courier"'} fill="#000000" x={x} y={y}>
    {`${`  ${sec}`.slice(-3)}`}
  </ART.Text>
);

const EditScreen = ({
  navigation,
  navigation: { state: { params } },
  data,
}: TypeProps) => {
  // Sec label
  if (secAry.length === 0) {
    // for (let i = 5; i <= 120; i += 5) {
    for (let i = 0; i <= 120; i++) {
      secAry.push(<SecLabel key={i} x={baseX} y={baseTextY + i * marginHeight} sec={i} />);
    }
  }

  // Gap line
  return (
    <Container>
      <Content padder>
        <View style={styles.container}>
          <Surface width={screenWidth} height={screenHeight}>
            {Object.keys(data).length === 0 ? (
              <Shape d="M0,0" />
            ) : (
              data.GapData.map((v, k) => {
                const gapHeight =
                  v.gapTime < 0
                    ? -100
                    : Number(v.gapTime) * marginHeight / 1000;
                return (
                  <Group key={k}>
                    <Shape
                      d={`M${baseX},${baseY +
                        gapHeight} h${barSH} v${barV} h${-barEH} z`}
                      fill={v.color}
                      strokeWidth={1}
                    />
                    <ART.Text
                      font={'10px "Courier"'}
                      fill="#000000"
                      x={baseTextX}
                      y={baseTextY + gapHeight}
                    >
                      {v.driverId}
                    </ART.Text>
                  </Group>
                );
              })
            )}
            {secAry}
          </Surface>
          <Text style={styles.text}>Edit Screen</Text>
          <Text>{params.title}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.touchText}>Back</Text>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};

const mapStateToProps = state => ({
  data: state.search.data,
  laps: state.input.laps,
});

export default connect(mapStateToProps, null)(EditScreen);
