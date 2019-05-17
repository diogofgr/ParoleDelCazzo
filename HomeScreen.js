import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Parole Del Cazzo',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.instructions}>
          <Text style={styles.title}>Le doppie</Text>
          <Text style={styles.instructionText}>
            Stai imparando l'italiano?
          </Text>
          <Text style={styles.instructionText}>
            Sbagli sempre le doppie? &#x1F974;
          </Text>
          <Text style={styles.instructionText}>
            Scrivi le parole corretamente. Se sbagli perdi punti!
          </Text>
        </View>
        { this.props.navigation.getParam('prevScore') &&
          <Text style={styles.score}>{this.props.navigation.getParam('prevScore')} punti</Text>
        }
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Giocare"
            onPress={() => navigate('Game')}
          />
        </View>
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
  },
  score: {
    fontSize: 30
  },
  instructions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 250,
  },
  instructionText: {
    fontSize: 16,
  },
  buttonContainer: {
    paddingTop: 10,
    flex: 1,
  },
  button: {
    fontSize: 25
  }
});

export default HomeScreen;