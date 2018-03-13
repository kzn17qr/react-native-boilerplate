// app/App.js

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/HomeScreen';
import Edit from './components/EditScreen';

const App = () => (
  <Router>
    <Scene modal>
      <Scene key="root">
        <Scene key="homeScr" component={Home} initial />
        <Scene key="editScr" component={Edit} />
      </Scene>
    </Scene>
  </Router>
);

export default App;
