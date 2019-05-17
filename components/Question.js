import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

class Question extends Component {
    state = {
        text: '',
        isCorrect: false,
    };

    componentDidMount() {
        this.keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          this._keyboardDidHide,
        );
    }

    componentWillUnmount() {
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidHide = () => {
        const { onNextStep, onWrongAnswer } = this.props;
        // check if the player answered correctly
        if (this.state.text === this.props.word.word) {
            // change color to green, set interval
            //  and then call next step
            this.setState(
                () => ({ 
                    isCorrect: true,
                    isWrong: false,
                }),
                () => setTimeout(() => onNextStep(), 3000)
            );
            
        }
        else {
            this.setState(
                () => ({ 
                    isWrong: true,
                    isCorrect: false
                }),
                () => onWrongAnswer()
            );
        }
    }

    handleChangeText = (text) => {
        this.setState({ 
            text: text.toLowerCase(),
            isWrong: false,
            isCorrect: false,
        });
    }

    render() {
        const { word } = this.props;
        const { text, isCorrect, isWrong } = this.state;

        return (
            <View style={styles.question}>
                <Image style={{ width: 200, height: 200 }} source={{ uri: word.imageUrl }} />
                {/* Show word capitalized */}
                { isWrong &&
                    <Text style={{...styles.title, color: red}}>
                        Sbagliato!
                    </Text>
                }
                { isCorrect &&
                    <Text style={{...styles.title, color: green}}>
                        Bravo!
                    </Text>
                }
                <TextInput
                    style={styles.input}
                    placeholder="Scrive qua!"
                    onChangeText={this.handleChangeText}
                    editable={!isCorrect}
                />
            </View>
        );
    }
}

const green = '#008000';
const red = '#FF0000';

const styles = StyleSheet.create({
    question: {
        height: 300,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
    },
    title: {
        fontSize: 20,
    },
    input: {
        fontSize: 20,
        height: 40,
    }
});

Question.propTypes = {
    word: PropTypes.object.isRequired,
    onNextStep: PropTypes.func.isRequired,
    onWrongAnswer: PropTypes.func.isRequired
};

export default Question;