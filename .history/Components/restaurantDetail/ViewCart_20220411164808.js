import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const ViewCart = ({ }) => {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items.map((item => Number(item.price.replace('$', '')))).reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: "currency",
    currency: "USD"
  })

  console.log(totalUSD);

  return (
    <>
      {total ? (
        <View style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          bottom: 10,
          zIndex: 999,
        }}>
          <View style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%"
          }}>
            <TouchableOpacity style={{
              marginTop: 20,
              backgroundColor: "black",
              alignItems: "center",
              padding: 13,
              borderRadius: 30,
              width: 300,
              flexDirection: "row",
              justifyContent: 'flex-end',
              position: "relative"
            }}>
  
              <Text style={{ color: "white", fontSize: 20, marginRight: 5}}>ViewCart</Text>
              <Text style={{color: "#fff", fontSize: 20}}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ): <View />}
      
    </>


  )
}

export default ViewCart;