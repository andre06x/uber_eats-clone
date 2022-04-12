import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Pick-up",
  }
]

const Categories = () => {
  return (
    <ScrollView horizontal>
      {items.map(i => (
        <View
          style={{
            alignItems: "center",
            marginRightn: 30
          }}
        >
          <Image
            source={i.image}
            style={{
              width: 50,
              height: 40,
              resizeMode: "contain"
            }}
          />
          <Text
            style={{
              fontSize: 13,
              fontWeight: "700"
            }}
          >
            {i.text}
          </Text>
        </View>
      ))}


    </ScrollView >
  )
}

export { Categories };