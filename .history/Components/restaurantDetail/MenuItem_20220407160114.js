import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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
    padding: 250,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "700",
  },
});


const MenuItem = () => {
  return (
    <View style={styles.menuItemStyle}>
      <FoodInfo foods={foods[0]}/>
      <FoodImage image={foods[0].image}/>
    </View>
  )
}

const FoodInfo = ({foods }) => {
  return (
    <View style={{width: 240, justifyContent: "space-evenly"}}>
      <Text style={styles.titleStyle}>{foods.title}</Text>
      <Text>{foods.description}</Text>
      <Text>{foods.price}</Text>
    </View>
  )
}

const FoodImage = ({image}) => {
  return (
    <Image 
      style={{width: 100, height: 100, borderRadius: 8}}
      source={{uri: image}}/>
  )
}

export default MenuItem;