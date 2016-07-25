import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import R from 'ramda';

import friendsListData from '../db/friendsList.json';

const elementPerLine = R.map(e => R.concat(e, '\n'));


module.exports = class FriendsList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(elementPerLine(friendsListData.names))
    };
  }

  render() {
    return (
      <View style={{ paddingTop: 22 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
          />
      </View>
    );
  }
};
