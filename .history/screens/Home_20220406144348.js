import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Categories } from "../Components/Categories";
import HeaderTabs from "../Components/HeaderTabs";
import RestauratItem, { localRestaurants } from "../Components/RestaurantItem";
import SearchBar from "../Components/SearchBar";
//import { } from '@expo/vector-icons';
// import { Container } from './styles';

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  
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

