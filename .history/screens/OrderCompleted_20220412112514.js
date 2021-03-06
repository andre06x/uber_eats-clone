import React from 'react';
import { View, Text} from "react-native";
import { useSelector } from "react-redux";

const OrderCompleted = () => {

  const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);
  const total = items.map((item => Number(item.price.replace('$', '')))).reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: "currency",
    currency: "USD"
  })


  return (
    <View>
      <Text>Your order at {restaurantName} has been completed!</Text>
    </View>
  )
}

export default OrderCompleted;