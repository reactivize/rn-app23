import React, { Component } from 'react';
import { Text, View, ListView, TouchableOpacity, Navigator, StyleSheet } from 'react-native';
import ViewContainer from '../components/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground';
//import Icon from 'react-native-vector-icons/FontAwesome';
import R from 'ramda';


const capitalize = s => R.concat(R.toUpper(R.head(s)), R.tail(s));

const people = [
  { firstName: 'jordan', lastName: 'leigh', roomNumber: 30 },
  { firstName: "will", lastName: "piers", roomNumber: 14 },
  { firstName: "berkeley", lastName: "wanner", roomNumber: 8 }
];


class PeopleIndexScreen extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    };
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground style={{ backgroundColor: 'mistyrose' }} />
        <ListView
          style={{ marginTop: 100 }}
          initialListSize={10}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => { return this.renderPersonRow(person); } } />
      </ViewContainer>
    );
  }

  renderPersonRow(person) {
    return (
      <TouchableOpacity style={styles.personRow} onPress={(event) => this.navigateToPersonShow(person) }>
        <Text style={styles.personName}>{`${capitalize(person.firstName)} ${capitalize(person.lastName)}`}</Text>
        <View style={{ flex: 1 }} />
        {/*<Icon name="chevron-right" size={10} style={styles.personMoreIcon} /> */}
      </TouchableOpacity>
    );
  }

  navigateToPersonShow(person) {
    this.props.navigator.push({
      ident: "PersonShow",
      person
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50
  },

  personName: {
    marginLeft: 25
  },

  personMoreIcon: {
    color: "green",
    height: 10,
    width: 10,
    marginRight: 25
  }

});

module.exports = PeopleIndexScreen;
