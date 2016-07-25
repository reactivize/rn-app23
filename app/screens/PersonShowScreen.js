import React, { Component } from 'react';
import { Text, View, ListView, TouchableOpacity, StyleSheet } from 'react-native';
import ViewContainer from '../components/ViewContainer';
import StatusBarBackground from '../components/StatusBarBackground';
import R from 'ramda';

//import Icon from 'react-native-vector-icons/FontAwesome';

const capitalize = s => R.concat(R.toUpper(R.head(s)), R.tail(s));


const people = [
  { firstName: "jordan", lastName: "leigh", roomNumber: 30 },
  { firstName: "will", lastName: "piers", roomNumber: 14 },
  { firstName: "berkeley", lastName: "wanner", roomNumber: 8 }
];


class PersonShowScreen extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    };
  }

  render() {
    var personBackgroundColor;
    switch (this.props.person.roomNumber) {
      case 30:
        personBackgroundColor = "coral";
        break;
      case 14:
        personBackgroundColor = "skyblue";
        break;
      case 8:
        personBackgroundColor = "lime";
        break;
    }

    return (
      <ViewContainer style={{ backgroundColor: personBackgroundColor }}>
        <StatusBarBackground style={{ backgroundColor: "mistyrose" }} />

        <TouchableOpacity onPress={() => this.props.navigator.pop() }>
          { /* <Icon name="times" size={30} /> */ }
        </TouchableOpacity>

        <ListView
          style={{ marginTop: 100 }}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => { return this.renderPersonRow(person) } } />

        <Text style={{ marginTop: 10, fontSize: 20 }}>{`PERSON SHOW SCREEN`}</Text>
        <Text style={styles.personName}>{`${capitalize(this.props.person.firstName)} ${capitalize(this.props.person.lastName)}`}</Text>
      </ViewContainer>
    )
  }

  renderPersonRow(person) {
    return (
      <TouchableOpacity style={styles.personRow} onPress={(event) => this.navigateToPersonShow(person) }>
        <Text style={styles.personName}>{`${capitalize(person.firstName)} ${capitalize(person.lastName)}`}</Text>
        <View style={{ flex: 1 }} />
        { /* <Icon name="chevron-right" size={10} style={styles.personMoreIcon} /> */ }
      </TouchableOpacity>
    )
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

module.exports = PersonShowScreen;
