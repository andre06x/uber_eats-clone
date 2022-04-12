import React from "react";
import { View, Text, Image } from 'react-native';

const image = "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"
const About = () => {
  return (
    <View>
      <Image source={{uri: image}}/>
    </View>
  )
}

export default About;