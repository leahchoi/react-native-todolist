import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/reducers';
// import ReduxThunk from 'redux-thunk';
import Input from './src/components/Input';

// import Home from './src/screens/home';


const store = createStore(rootReducer, {});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    {/* <Home /> */}
                    <Input />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});