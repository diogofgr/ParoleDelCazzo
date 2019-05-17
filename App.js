import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen, title: 'Parole Del Cazzo'},
  Game: {screen: GameScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
