import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";

const ViewCart = ({}) => {
  return (
    <View>
      <TouchableOpacity style={{marginTop: 20, backgroundColor: "black", alignItems: "center"}}>

        <Text style={{ color: "white", fontSize: 20}}>ViewCart</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ViewCart;