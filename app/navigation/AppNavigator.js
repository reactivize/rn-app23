import React, { Component } from 'react';
import { Navigator, Text, StyleSheet } from 'react-native';
import PeopleIndexScreen from '../screens/PeopleIndexScreen';
import PersonShowScreen from '../screens/PersonShowScreen';

class AppNavigator extends Component {

  renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }; //things you want injected into every screen

    switch (route.ident) {

      case 'PeopleIndex':
        return (
          <PeopleIndexScreen
            {...globalNavigatorProps} />
        );

      case 'PersonShow':
        return (
          <PersonShowScreen
            {...globalNavigatorProps}
            person={route.person} />
        );

      default:
        return (
          <Text>{`YO YOU MESSED SOMETHING UP ${route}`}</Text>
        );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this.renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
        }) } />
    );
  }

}

const styles = StyleSheet.create({

  navigatorStyles: {

  }

});

module.exports = AppNavigator;
