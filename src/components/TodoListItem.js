import React, { Component } from 'react';
import { connect } from 'react-redux';
import { textChangeHandler } from '../actions/index'
import { Platform, StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class TodoListItem extends Component {
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
      <View>
          {displayTodoItems}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    todoListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    deleteBtn: {
        width: '25%'
    },
    text: {
        fontSize: 20,
        width: '80%',
        paddingLeft: 5
    }
})