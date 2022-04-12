import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Categories } from "../Components/Categories";
import HeaderTabs from "../Components/HeaderTabs";
import RestauratItem, { localRestaurants } from "../Components/RestaurantItem";
import SearchBar from "../Components/SearchBar";
//import { } from '@expo/vector-icons';
// import { Container } from './styles';

const Home = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const YELP_API_KEY = "lLvN10B9beBjdh65RVKtIVbbCQFazJUMGLJRcOV0cbsiu9HNw1lEQIqp1QjvGHa0xL2JGc0B7qNne4qpI91vpHkc-OcGriiwLiQXqmvWjBPS7U3sTr_ftDh9ndpNYnYx";

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Maricá`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      }
    }

    return fetch(yelpUrl, apiOptions)
    .then(res => res.json())
    .then(json => setRestaurantData(json.businesses))
  }

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [])

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}> 
        <Categories />
        <RestauratItem restaurantData={restaurantData}/>
      </ScrollView>

    </SafeAreaView>
  );
}

export default Home;

