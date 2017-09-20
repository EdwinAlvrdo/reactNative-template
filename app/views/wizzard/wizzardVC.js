'use strict'

import React, { Component } from  'react'
import {
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
  Alert,
  StyleSheet
} from 'react-native'

import { StackNavigator } from 'react-navigation';

class wizzardVC extends Component{
  constructor(){
    super();
    //Bind all functions
    //ej:: this.onLogin = this.onLogin.bind(this);

  }

  render(){
    return(
      <View>
        <Text>This is the wizzard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 40
  }
});

module.exports = wizzardVC;
