/**
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

//import AppNavigator from './app/navigation/AppNavigator';

const dWidth = Dimensions.get('window').width;
const br2 = '\n\n';

module.exports = class Faq extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {

    return (
      <View style={styles.container}>

        <Image source={require('../statics/images/faq.png') } style={styles.img} />


        <Text style={styles.margin5}>

          Using ZeeMee: FAQs and help files
          {br2}
          COLLEGE HAPPINESS
          {br2}
          Creating Your Admissions Counselor ZeeMee Page
          Up & Running with ZeeMee
          How do I add ZeeMee to our application?
          How do I get ZeeMee on our checklist?
          {br2}
          THE BASICS
          {br2}
          Audio Files
          ZeeMee Partners
          Add a clickable link
          Ideas for Meet Me Video
          Is the Meet Me video required?
          What is ZeeMee?
          See all 13 articles
          PROFESSIONAL TIPS
          {br2}
          What should I add to my ZeeMee page?
          Making a great introduction video for the MEET ME section
          Why does making a profile on ZeeMee help?
          {br2}
          ACCOUNT SETTINGS
          {br2}
          How do I turn on/off shoutouts on my public view?
          How do I add a profile photo?
          How do I change my email address?
          How do I reset my password?
          Who can see my ZeeMee profile?
          Profile discovery mode
          See all 8 articles
          COLLEGES
          {br2}
          How do I connect my Admissions Counselor page with students?
          How do I set up an admissions rep page?
          Why wouldn't a college partner with ZeeMee?
          How do colleges become an official partner?
        </Text>



      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  margin5: {
    marginLeft: 30,
    marginRight: 30
  },
  img: {
    width: dWidth,
    height: 250
  }
});
