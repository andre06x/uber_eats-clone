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
    <View style={{marginTop: 5, backgroundColor: "#fff", paddingVertical: 10, paddingLeft: 20}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((i, index) => (
        <View
          key={index}
          style={{
            alignItems: "center",
            marginRight: 30,
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
    </View>
    
  )
}

export { Categories };