import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";

import { useDispatch, useSelector } from "react-redux";

let foods = [
  {
    title: "Lasanha",
    description: "Lasanha à Bolonhesa com um gostinho caseiro",
    price: "$15",
    image: "https://img.itdg.com.br/tdg/images/recipes/000/000/876/324587/324587_original.jpg"
  },
  {
    title: "Pizza de marguerita",
    description: "A melhor pizza de todas!",
    price: "$13",
    image: "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2020/08/pizza-margherita.jpg"
  },
  {
    title: "Açai",
    description: "Açai de morango com leite em pó.",
    price: "$10",
    image: "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.2140192:1590239263/Pit-Stop.jpg"
  },
  {
    title: "Xtudão",
    description: "Aquele podrão que vai te matar!",
    price: "$12",
    image: "https://deliveryportodegalinhas.com.br/wp-content/uploads/2013/06/x-tudo-600x600.jpg"
  },
  {
    title: "Escondidinho",
    description: "Apenas um escondidinho mesmo",
    price: "$17",
    image: "https://conteudo.imguol.com.br/c/entretenimento/14/2020/04/30/escondidinho-de-cenoura-1588275560425_v2_450x337.jpg.webp"
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