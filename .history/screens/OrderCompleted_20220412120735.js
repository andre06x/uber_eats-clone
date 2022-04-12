import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import LottieView from 'lottie-react-native';
import MenuItem from "../Components/restaurantDetail/MenuItem";


const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState()

  const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);
  const total = items.map((item => Number(item.price.replace('$', '')))).reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: "currency",
    currency: "USD"
  })

  useEffect(() => {


  }, [items, total])


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{ margin: 15, alignItems: "center", height: "100%" }}>
        <LottieView style={{ height: 100, alignSelf: 'center', marginBottom: 10 }}
          source={require('../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Your order at {restaurantName} has been completed! For {total} dollares</Text>
        <ScroolView>
          <MenuItem hideCheckbox={true} foodsCompleted={items} />
          <LottieView style={{ height: 200, alignSelf: 'center', marginBottom: 10 }}
            source={require('../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
            loop={false}
          />
        </ScroolView>

      </View>
      {/* {green checkmark} */}

    </SafeAreaView>
  )
}

export default OrderCompleted;