import React from "react";
import { View, Text } from 'react-native';
import { Divider } from "react-native-elements";
import About from "../Components/restaurantDetail/About";
import MenuItem from "../Components/restaurantDetail/MenuItem";
import ViewCart from "../Components/restaurantDetail/ViewCart";

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View style={{height: 800}}>
      <About route={route}/>
      <Divider width={1.8} style={{marginVertical: 20}}/>
      <MenuItem />
      <ViewCart navigation={navigation} restaurantName={route.params.name}/>
    </View>
  )
}

export default RestaurantDetail;