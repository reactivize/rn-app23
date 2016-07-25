/**
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

//import AppNavigator from './app/navigation/AppNavigator';

const dWidth = Dimensions.get('window').width;
const br = '\n';
const br2 = '\n\n';



module.exports = class Samples extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {



    const pic1 = {
      uri: 'https://www.zeemee.com/assets/sample_profiles/lua-ee806b0b14f57d3c77ae1278aea362cd.jpg'
    };

    const pic2 = {
      uri: 'https://www.zeemee.com/assets/sample_profiles/nicholas-0c86db83920f8a21af51ab800aa7c06b.jpg'
    };


    const pic3 = {
      uri: 'https://www.zeemee.com/assets/sample_profiles/taelor-1cc73b34375b1131751fcd48d0048c49.jpg'
    };



    return (
      <View>

        <Text style={styles.margin5}>
          <Image source={pic1} style={styles.img}/>
          Lua
          {br}FOne thing I wish everybody could do is go out of their comfort zone and travel.
          {br2}{br2}

          <Image source={pic2} style={styles.img}/>
          FNicholas
          {br}FI stay busy balancing AP courses, National Honor Society, Key Club and National Spanish Honor Society.
          {br2}{br2}
          <Image source={pic3} style={styles.img}/>
          FTaelor
          {br}FI love spending my free time reading, playing my violin, or researching a new recipe to master!
          {br2}{br2}
        </Text>
      </View>

    );
  }
};

const styles = StyleSheet.create({

  margin5: {
    marginLeft: 30,
    marginRight: 30
  },
  img: {
    width: dWidth * 0.9,
    height: 200
  }
});
