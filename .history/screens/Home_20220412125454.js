import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomTabs } from "../Components/home/BottomTabs";
import { Categories } from "../Components/home/Categories";
import HeaderTabs from "../Components/home/HeaderTabs";
import RestauratItem, { localRestaurants } from "../Components/home/RestaurantItem";
import SearchBar from "../Components/home/SearchBar";

const Home = ({ navigation }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const YELP_API_KEY = "lLvN10B9beBjdh65RVKtIVbbCQFazJUMGLJRcOV0cbsiu9HNw1lEQIqp1QjvGHa0xL2JGc0B7qNne4qpI91vpHkc-OcGriiwLiQXqmvWjBPS7U3sTr_ftDh9ndpNYnYx";
  const [city, setCity] = useState('Marica');
  const [activeTab, setActiveTab] = useState("Delivery")

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

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
  }, [city, activeTab])

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar setCity={setCity} getRestaurantsFromYelp={getRestaurantsFromYelp}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}> 
        <Categories />
        <RestauratItem navigation={navigation} restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />


    </SafeAreaView>
  );
}

export default Home;

