import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const RestauratItem = () => {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
      <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
        <RestaurantImage />
        <RestauratInfo />
      </View>
    </TouchableOpacity>


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
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={20} color="#fff" />
      </TouchableOpacity>

    </>
  )
};

const RestauratInfo = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "700" }}>
          Farmhouse kitchen Thai Cuisine
        </Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 . min</Text>
      </View>

      <View style={{ backgroundColor: "#eee", justifyContent: "center", marginRight: 5, height: 30, width: 30, alignItems: "center", borderRadius: 15 }}>
        <Text>4.5</Text>
      </View>
    </View>
  )
}

export default RestauratItem;