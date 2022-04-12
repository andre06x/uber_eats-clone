import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";

import { useDispatch, useSelector } from "react-redux";

let foods = [
  {
    title: "Lasanha",
    description: "Lasanha de ",
    price: "$13",
    image: "https://img.itdg.com.br/tdg/images/recipes/000/000/876/324587/324587_original.jpg"
  },
  {
    title: "Lasgna2",
    description: "hmmm churume",
    price: "$13",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
  },
  {
    title: "Lasgna3",
    description: "hmmm churume",
    price: "$13",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
  },
  {
    title: "Lasgna4",
    description: "hmmm churume",
    price: "$13",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
  },
  {
    title: "Lasgna5",
    description: "hmmm churume",
    price: "$13",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
  },
]



const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 10
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "700",
  },
});


const MenuItem = ({ restaurantName, hideCheckbox, marginLeft, foodsCompleted }) => {
  const [foodsGeral, setFoodsGeral] = useState(foods);

  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) => dispatch({
    type: "ADD_TO_CART",
    payload: { ...item, restaurantName: restaurantName, checkboxValue: checkboxValue }
  });

  const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

  const isFoodInCart = (food, cartItems) => {
    return Boolean(cartItems.find((item) => item.title === food.title));
  }



  useEffect(() => {
    if (foodsCompleted) {
      setFoodsGeral(foodsCompleted)
    }
  }, [foodsCompleted, foodsGeral])

  return (
    <ScrollView style={{}} showsVerticalScrollIndicator={true}>
      {foodsGeral.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0, }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />
            )}
            <FoodInfo foods={food} />
            <FoodImage image={food.image} />
          </View>
          <Divider width={0.5} />
        </View>
      ))}
    </ScrollView>

  )
}

const FoodInfo = ({ foods }) => {
  return (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
      <Text style={styles.titleStyle}>{foods.title}</Text>
      <Text>{foods.description}</Text>
      <Text>{foods.price}</Text>
    </View>
  )
}

const FoodImage = ({ image }) => {
  return (
    <Image
      style={{ width: 85, height: 85, borderRadius: 5 }}
      source={{ uri: image }} />
  )
}

export default MenuItem;