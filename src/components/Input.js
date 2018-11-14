import React, { Component } from 'react';
import { connect } from 'react-redux';
import { textChangeHandler } from '../actions/index'
import { Platform, StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

class Input extends Component {
    textChangeHandler = (userInput) => {
        console.log(userInput)
        this.setState({
            inputText: userInput,
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputBox}
                        onChangeText={this.textChangeHandler}
                        value={this.state.inputText}
                    />
                    <Button
                        title='Add'
                        style={styles.addBtn}
                        onPress={this.addTodoItem}
                    />
                </View>
                {displayTodoItems}
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
})

export default connect(null, { textChangeHandler } (Input));