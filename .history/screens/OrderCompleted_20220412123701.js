import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import LottieView from 'lottie-react-native';
import MenuItem from "../Components/restaurantDetail/MenuItem";


const OrderCompleted = () => {
  const [loading, setLoading] = useState(true);

  const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);
  const total = items.map((item => Number(item.price.replace('$', '')))).reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: "currency",
    currency: "USD"
  })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },3000)

  }, [items, total])


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {loading ? (
        <View style={{ flex: 1, alignSelf: 'center', justifyContent: "center" }}>
          <LottieView style={{ height: 200}}
            source={require('../assets/animations/scanner.json')}
            autoPlay
            speed={0.5}
            loop={true}
          />
        </View>

      ) : (
        <View
          style={{ margin: 15, alignItems: "center", height: "100%" }}>
          <LottieView style={{ height: 100, alignSelf: 'center', marginBottom: 10 }}
            source={require('../assets/animations/check-mark.json')}
            autoPlay
            speed={0.5}
            loop={false}
          />
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Seu pedido em {restaurantName} foi completado! Por apenas ${total}!</Text>
          <ScrollView style={{ height: 20 }}>
            <MenuItem hideCheckbox={true} foodsCompleted={items} />
            <LottieView style={{ height: 200, alignSelf: 'center', marginBottom: 10 }}
              source={require('../assets/animations/cooking.json')}
              autoPlay
              speed={0.5}
              loop={false}
            />
          </ScrollView>

        </View>
      )
      }

    </SafeAreaView >
  )
}

export default OrderCompleted;