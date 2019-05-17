import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import wordBank from './wordBank';
import Question from './components/Question';

const maxFailedAttempt = 3;

class GameScreen extends Component {
    state = {
        step: 0,
        score: wordBank.length * maxFailedAttempt,
    };

    static navigationOptions = ({ navigation }) => {
        return {
          title: `Parola Del Cazzo ${navigation.getParam('currentStepPlusOne', '1')}/${wordBank.length}`,
        };
      };

    handleNextStep = () => {
        const { step, score } = this.state;
        if (step === wordBank.length - 1) {
            // go home and show score
            const { navigate } = this.props.navigation;
            navigate('Home', { prevScore: score });
        } else {
            // Go to next step (next question)
            // update current step on header after setState
            this.setState(
                state => ({
                    step: ++state.step
                }),
                () => this.props.navigation.setParams({currentStepPlusOne: this.state.step + 1})
            )
        }
    }

    handleLoosePoints = () => {
        this.setState(state => ({ score: --state.score }));
    }

    componentDidUpdate() {
        const { navigate } = this.props.navigation;
        const { score } = this.state;

        if (score <= 0) {
            navigate('Home', { prevScore: score });
        }
    }

    render() {
        const { step } = this.state;
        return (
            <View style={styles.container}>
                { wordBank.map((word, index) => {
                    if (index !== step ) return null;
                    return (
                        <Question 
                            key={word.word} 
                            word={word} 
                            onWrongAnswer={this.handleLoosePoints} 
                            onNextStep={this.handleNextStep} 
                        />
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default GameScreen;