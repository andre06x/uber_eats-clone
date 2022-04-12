import React from "react";
import { View, Text } from 'react-native';
import { Divider } from "react-native-elements";
import About from "../Components/restaurantDetail/About";
import MenuItem from "../Components/restaurantDetail/MenuItem";

const RestaurantDetail = () => {
  return (
    <View style={{paddingBottom: 109}}>
      <About />
      <Divider width={1.8} style={{marginVertical: 20}}/>
      <MenuItem />
      <Text>a</Text>
    </View>
  )
}

export default RestaurantDetail;