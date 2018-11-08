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

  submitHandler = (event) => {
    console.log('submithandler', this.state.inputText)
    var todo = this.state.todoItems.concat(this.state.inputText);
    console.log('submit handler todo', todo)
    this.setState(prevState => {
      return {
        todoItems: prevState.todoItems.concat(prevState.inputText)
      }
    })
    console.log('submithandler: todoItems', this.state)
  }

  render() {

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          // onChangeText={(text) => this.addTodoItems}
          onChangeText={this.addTodoItems}
          value={this.state.inputText}
        />
        <Button
          // style={styles.button}
          title='Add'
          onPress={this.submitHandler}
        />
        <View>
         <Text style={styles.text}>
            {this.state.todoItems}
          </Text>
          <Button  title='delete' /> 
        </View>
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
    paddingTop: 40

  },
  inputBox: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  text:{
    fontSize: 20,
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
