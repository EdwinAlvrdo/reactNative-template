/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//Importing components
import Index from './app/index';

export default class iter extends Component {
  //Redirect all platforms to index.js in ./app
  render() {
    return (
      <View style={styles.container}>
        <Index/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

AppRegistry.registerComponent('iter', () => iter);
