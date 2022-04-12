import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTabs from "../Components/HeaderTabs";
import { } from '@expo/vector-icons';
// import { Container } from './styles';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
      <View style={{ backgroundColor: "white", padding: 15}}>
        <HeaderTabs />
      </View>

    </SafeAreaView>
  );
}

export default Home;

