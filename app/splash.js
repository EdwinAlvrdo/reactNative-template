/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//Importing Libraries
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import TimerMixin from 'react-timer-mixin'

//Importing components
import WizzardVC from './views/wizzard/wizzardVC'
import HomeVC from './views/home/homeVC'
import Index from './index';

export default class iter extends Component {
  //Redirect all platforms to index.js in ./app
  constructor(props){
    super(props);
  }

  state = {
    ready: false
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ ready: true })
    }, 50)
  }

  render() {
    if (this.state.ready === false){
      return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('./values/assets/itersymbol.png')}>
            </Image>
        </View>
      );
    }
    return this.props.children
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 64,
    height: 64,
    resizeMode: 'contain'
  }
});

AppRegistry.registerComponent('iter', () => iter);
