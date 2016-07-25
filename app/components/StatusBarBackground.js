/**
 * gives control over every granular aspect of your UI layout 
 * 29.05
 * 
 */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class StatusBarBackground extends Component {

  render() {
    return (
      <View style={[styles.statusBarBackground, this.props.style || {}]}>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  statusBarBackground: {
    height: 20,
    backgroundColor: 'white'
  }

});

module.exports = StatusBarBackground;
