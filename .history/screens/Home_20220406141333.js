import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Categories } from "../Components/Categories";
import HeaderTabs from "../Components/HeaderTabs";
import RestauratItem from "../Components/RestaurantItem";
import SearchBar from "../Components/SearchBar";
//import { } from '@expo/vector-icons';
// import { Container } from './styles';

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}> 
        <Categories />
        <RestauratItem />
        <RestauratItem />
        <RestauratItem />
        <RestauratItem />
      </ScrollView>

    </SafeAreaView>
  );
}

export default Home;

