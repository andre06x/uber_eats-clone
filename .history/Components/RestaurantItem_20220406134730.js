import React from 'react';
import { View, Text, Image } from 'react-native';

const RestauratItem = () => {
  return (
    <View>
      <Text>RestauratItem</Text>
    </View>
  )
}

const RestaurantImage = () => {
  return (
    <Image
      source={{
        uri: ""
      }} 
      style={{width: "100%", height: 180}}
    />
  )
}

export default RestauratItem;