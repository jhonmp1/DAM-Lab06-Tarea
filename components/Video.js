import React from 'react';
import {StyleSheet, Text, View, Dimensions, useState} from 'react-native';
import Video from 'react-native-video';
import videoFile from '../video/prueba.mp4';

const VideoComp = () => {
  const {width} = Dimensions.get('window');
  const [ispaused, setIsPaused] = React.useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}></Text>
      <View style={{border:'white',backgroundColor: 'white'}}>
        <Video
          source={videoFile}
          paused={ispaused}
          controls={true}
          style={{width: width, height: 250}}
          playInBackground={false}
        />
      </View>
      <View style={{backgroundColor: 'white'}}>
        <Video
          source={videoFile}
          paused={ispaused}
          controls={true}
          style={{width: width, height: 300}}
          playInBackground={false}
        />
      </View>
    </View>
  );
};

export default VideoComp;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: 'white',
  },
  
});
