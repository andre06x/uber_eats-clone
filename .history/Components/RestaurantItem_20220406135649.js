import React from 'react';
import { View, Text, Image, TouchebleOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const RestauratItem = () => {
  return (
    <View>
      <RestaurantImage />
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
      <TouchebleOpacity>

        <MaterialCommunityIcons name="heart-outline" size={20} color="#fff"/>
      </TouchebleOpacity>
    </>
  )
}

export default RestauratItem;