import React from 'react';
import { View, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const OrderCompleted = () => {

  const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);
  const total = items.map((item => Number(item.price.replace('$', '')))).reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: "currency",
    currency: "USD"
  })


  return (
    <SafeAreaView>
      <Text>Your order at {restaurantName} has been completed! For {total} dollares</Text>
    </SafeAreaView>
  )
}

export default OrderCompleted;