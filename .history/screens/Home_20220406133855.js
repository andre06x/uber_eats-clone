import React from 'react';
import { View, Text, ScroolView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Categories } from "../Components/Categories";
import HeaderTabs from "../Components/HeaderTabs";
import SearchBar from "../Components/SearchBar";
//import { } from '@expo/vector-icons';
// import { Container } from './styles';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
      <View style={{ backgroundColor: "white", padding: 15}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScroolView>

        <Categories />
      </ScroolView>

    </SafeAreaView>
  );
}

export default Home;

