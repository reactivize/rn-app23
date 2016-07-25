/**
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions } from 'react-native';

const dWidth = Dimensions.get('window').width;
//const br = '\n';
const br2 = '\n\n';


module.exports = class Samples extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }



  render() {

    const pic1 = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };



    return (
      <View>

        <Image source={pic1} style={styles.img}/>

        <TextInput
          style={styles.fullwidth}
          placeholder="Type here to make pizza!"
          onChangeText={(text) => this.setState({ text }) }
          />

        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ') }
        </Text>


        <Text style={styles.welcome}>
          Welcome to WeeMee!13
        </Text>

        <Text style={styles.instructions}>
          Generation Z resonates deeply with ZeeMee
        </Text>

        <Text style={styles.marginText}>
          A platform where students could post pictures, videos and documents in a creative and professional manner.
          {br2}Everyone has a story, and every story matters.Bring your story to life and share it with colleges by creating a ZeeMee page
          {br2}Whether someone wants to go to their top choice for college, land that perfect summer internship, or find that dream job, you can help ZeeMee successfully fulfill our vision.
          {br2}Use ZeeMee to put your best foot forward and stand out from the crowd
          {br2}
        </Text>


      </View>
    );
  }
};




const styles = StyleSheet.create({

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  marginText: {
    marginLeft: 20,
    marginRight: 20
  },
  img: {
    width: dWidth,
    height: 200
  },
  fullwidth: {
    width: dWidth
  },
  body: {
    marginBottom: 5
  }
});







