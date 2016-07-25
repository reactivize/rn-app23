/**
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import YouTube from 'react-native-youtube';

const dWidth = Dimensions.get('window').width;



class ZmYouTube extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: true
    };
  }



  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {"Your Video Profile."}
        </Text>
        <Text style={styles.instructions}>
          Click here for instructions on uploading your video
        </Text>

        <YouTube
          videoId="u7wHEFczqs8"
          play={this.state.isPlaying}
          hidden={false}
          playsInline={true}
          onReady={(e) => { this.setState({ isReady: true }); } }
          onChangeState={(e) => { this.setState({ status: e.state }); } }
          onChangeQuality={(e) => { this.setState({ quality: e.quality }); } }
          onError={(e) => { this.setState({ error: e.error }); } }
          style={{ alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10 }}
          />

        <TouchableOpacity onPress={() => { this.setState((s) => { return { isPlaying: !s.isPlaying }; }); } }>
          <Text style={[styles.welcome, { color: 'blue' }]}>{this.state.status === 'playing' ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>

        <Text style={styles.instructions}>{this.state.isReady ? 'Player is ready.' : 'Player setting up...'}</Text>
        <Text style={styles.instructions}>Status: {this.state.status}</Text>
        <Text style={styles.instructions}>Quality: {this.state.quality}</Text>
        <Text style={styles.instructions}>{this.state.error ? 'Error: ' + this.state.error : ' '}</Text>

      </View>
    );
  }
}




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
    width: dWidth * 0.9,
    height: 200
  }
});




module.exports = ZmYouTube;




/*
       <YouTube
            ref="youtubePlayer"
            videoId="KVZ-P-ZI6W4" // The YouTube video ID
            play={true}           // control playback of video with true/false
            hidden={false}        // control visiblity of the entire view
            playsInline={true}    // control whether the video should play inline
            loop={false}          // control whether the video should loop when ended

            onReady={(e) => { this.setState({ isReady: true }) } }
            onChangeState={(e) => { this.setState({ status: e.state }) } }
            onChangeQuality={(e) => { this.setState({ quality: e.quality }) } }
            onError={(e) => { this.setState({ error: e.error }) } }
            onProgress={(e) => { this.setState({ currentTime: e.currentTime, duration: e.duration }) } }

            style={{ alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10 }}
            />

*/


