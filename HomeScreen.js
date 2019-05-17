import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props.navigation.getParam('prevScore'));
    return (
      <View style={styles.container}>
        <Text>Parole Del Cazzo</Text>
        { this.props.navigation.getParam('prevScore') &&
          <Text style={styles.title}>Your score: {this.props.navigation.getParam('prevScore')} points</Text>
        }
        <Button
          title="Giocare"
          onPress={() => navigate('Game')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20
  }
});

export default HomeScreen;