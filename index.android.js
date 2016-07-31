/**
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, ScrollView, StatusBar, Text,  } from 'react-native';

import AppNavigator from './app/navigation/AppNavigator';
import Faq from './app/screens/Faq';
import Samples from './app/screens/Samples';
import ZmYouTube from './app/screens/ZmYouTube';
import Welcome from './app/screens/Welcome';

import FriendsList from './app/components/FriendsList';
//import DynamicForms from './app/components/DynamicForms';
//import GiftedListView from './app/components/GiftedListView';

//import Icon from 'react-native-vector-icons/FontAwesome';


class AwesomeProject0723b extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

          <StatusBar
            backgroundColor="mistyrose"
            barStyle="light-content"
            />

          <Text>7th time</Text>

          <Welcome />

          <ZmYouTube />

          <FriendsList />

          <Samples />

          <Faq />

        </View>
      </ScrollView>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'

  }
});


AppRegistry.registerComponent('AwesomeProject0723b', () => AwesomeProject0723b);
