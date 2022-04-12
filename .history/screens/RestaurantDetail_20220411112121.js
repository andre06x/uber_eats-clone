import React from "react";
import { View, Text } from 'react-native';
import { Divider } from "react-native-elements";
import About from "../Components/restaurantDetail/About";
import MenuItem from "../Components/restaurantDetail/MenuItem";
import ViewCart from "../Components/restaurantDetail/ViewCart";

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View style={{flex: 1}}>
      <About route={route}/>
      <Divider width={1.8} style={{marginVertical: 20}}/>
      <ViewCart navigation={navigation} restaurantName={route.params.name}/>
      <MenuItem />
    </View>
  )
}

export default RestaurantDetail;