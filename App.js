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

  addTodoItems = (userInput) => {
    console.log(userInput)
    this.setState({
      inputText: userInput,
    })
  }

  deleteItem = (i) => {
    console.log('deleteitem index:', i);
    // console.log('deleteitem event:', event);

  }

  displayOnDom = () => {
    if (this.state.inputText === '') {
      alert('Please input a valid todo list item!')
    } else {
      this.setState(prevState => {
        return {
          todoItems: prevState.todoItems.concat(prevState.inputText)
        }
      })
    }
  }

  render() {
    const displayTodoItems = (this.state.todoItems).map((todoItem) =>
      <View style={styles.todoListContainer}>
        <Text style={styles.text}>
          {todoItem}
        </Text>
        <Button title='Delete' style={styles.deleteBtn} onPress={this.deleteItem} />
      </View>
    )
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputBox}
            onChangeText={this.addTodoItems}
            value={this.state.inputText}
          />
          <Button
            title='Add'
            style={styles.addBtn}
            onPress={this.displayOnDom}
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
  todoListContainer:{
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
