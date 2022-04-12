import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const foods = [
  {
    title: "Lasgna",
    description: "hmmm churume",
    price: "$13",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
  },
  {
    title: "Lasgna",
    description: "hmmm churume",
    price: "$13",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
  },
  {
    title: "Lasgna",
    description: "hmmm churume",
    price: "$13",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
  },
  {
    title: "Lasgna",
    description: "hmmm churume",
    price: "$13",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
  },
]

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});


const MenuItem = () => {
  return (
    <View style={styles.menuItemStyle}>
      <FoodInfo foods={foods[0]}/>
    </View>
  )
}

const FoodInfo = ({foods }) => {
  return (
    <View style={{width: 240, justifyContent: "space-evenly"}}>
      <Text>{foods.title}</Text>
      <Text>{foods.description}</Text>
      <Text>{foods.price}</Text>
    </View>
  )
}

// const FoodImage = () => {
//   return (

//   )
// }

export default MenuItem;