import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

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
    padding: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "700",
  },
});


const MenuItem = () => {
  return (
      <ScrollView style={{height: 400, marginBottom: 340, }} showsVerticalScrollIndicator={true}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo foods={food} />
            <FoodImage image={food.image} />
          </View>

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