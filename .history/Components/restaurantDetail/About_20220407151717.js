import React from "react";
import { View, Text, Image } from 'react-native';

const image = "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"
const title= "Restaurante Doidera";
const description = "Thau . Comfort . $$ . dolar. 4 : (2019"

const About = () => {
  return (
    <View>
      <RestaurantImage image={image}/>
    </View>
  )
}

const RestaurantImage = ({image}) => (
  <Image source={{uri: image}} style={{width: "100%", height: 180}}/>
)
export default About;