// src/app/App.js

import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import EditScreen from './components/EditScreen';

const App = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Edit: { screen: EditScreen },
  },
  {
    initialRouteName: 'Home',
  },
);

export default App;
