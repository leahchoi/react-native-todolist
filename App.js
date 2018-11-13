/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class App extends Component {

  state = {
    inputText: '',
    todoItems: []
  }

  textChangeHandler = (userInput) => {
    console.log(userInput)
    this.setState({
      inputText: userInput,
    })
  }

  deleteItem = (val) => {
    this.setState({
      todoItems: this.state.todoItems.filter(entry => entry !== val)
    })
  }

  addTodoItem = () => {
    if (this.state.inputText === '') {
      alert('Please input a valid todo list item!')
    } else {
      this.setState(prevState => {
        return {
          todoItems: prevState.todoItems.concat(prevState.inputText),
          inputText: ''
        }
      })
    }
  }

  render() {
    const displayTodoItems = (this.state.todoItems).map((todoItem, index) =>
      <View style={styles.todoListContainer} key={todoItem}>
        <Text style={styles.text}>
          {todoItem}
        </Text>
        <Button title='Delete' style={styles.deleteBtn} onPress={() => this.deleteItem(todoItem)} />
      </View>
    )
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
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 50

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  todoListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  inputBox: {
    height: 40,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1
  },
  addBtn: {
    width: '25%',
    paddingLeft: 5,
  },
  deleteBtn: {
    width: '25%'
  },
  text: {
    fontSize: 20,
    width: '80%',
    paddingLeft: 5
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
