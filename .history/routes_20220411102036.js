import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RestaurantDetail from "./screens/RestaurantDetail";
import Home from "./screens/Home";

const Routes = () => {
  const Stack = createStackNavigator();

  const screnOption = {
    headerShow: false
  };


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;