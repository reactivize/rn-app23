/**
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, TabBarIOS, StyleSheet } from 'react-native';

import AppNavigator from './app/navigation/AppNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';


class abcrn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tab1'
    };
  }


  render() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>

        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === 'tab1'}
          title={'TAB 1'}
          iconName="user"
          onPress={() => this.setState({ selectedTab: 'tab1' }) }>

          <AppNavigator
            initialRoute={{ ident: 'PeopleIndex' }}
          />
        </Icon.TabBarItemIOS>



        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === 'tab2'}
          title={'TAB 2'}
          iconName="user"
          onPress={() => this.setState({ selectedTab: 'tab2' }) }>

          <AppNavigator
            initialRoute={{
              ident: "PersonShow",
              person: { firstName: 'joe', lastName: 'sixpack', roomNumber: 30 }
            }} />

        </Icon.TabBarItemIOS>


      </TabBarIOS>
    );
  }

}

const styles2 = StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('abcrn', () => abcrn);
