import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { textChangeHandler } from '../actions';

class Input extends Component {
    textChangeHandler = (userInput) => {
        console.log(userInput)
        this.setState({
            inputText: userInput,
        })
    }
    render() {
        return (
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputBox}
                        // onChangeText={this.textChangeHandler}
                        // value={this.state.inputText}
                    />
                    <Button
                        title='Add'
                        style={styles.addBtn}
                        onPress={()=>this.props.textChangeHandler()}
                    />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 50

    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    inputBox: {
    height: 40,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1
  },
})

export default connect(null, {textChangeHandler})(Input)