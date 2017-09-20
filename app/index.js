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
import WizzardView from './views/wizzard/wizzardVC';
import HomeView from './views/home/homeVC'
import SplashView from './splash'

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SplashView/>
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
