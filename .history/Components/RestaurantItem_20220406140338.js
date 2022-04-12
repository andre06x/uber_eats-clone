import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const RestauratItem = () => {
  return (
    <View>
      <RestaurantImage />
      <RestauratInfo />
    </View>
  )
}

const RestaurantImage = () => {
  return (
    <>
    <Image
      source={{
        uri: "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM="
      }}
      style={{ width: "100%", height: 180 }} 
    />
      {/* <TouchebleOpacity /> */}
      <TouchableOpacity style={{position: "absolute", right: 20, top: 20}}>
        <MaterialCommunityIcons name="heart-outline" size={20} color="#fff"/>
      </TouchableOpacity>

    </>
  )
};

const RestauratInfo = () => {
  return (
    <View 
      style={{
        flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10
        }}>
      <Text>Farmhouse kitchen Thai Cuisine</Text>
      <Text>30-45 . min</Text>
      <Text>4.5</Text>
    </View>
  )
}

export default RestauratItem;