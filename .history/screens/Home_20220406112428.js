import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from "react-native-web";
import HeaderTabs from "../Components/HeaderTabs";

// import { Container } from './styles';

const Home = () => {
  return (
    <SafeAreaView>

      <HeaderTabs />
    </SafeAreaView>
  );
}

export default Home;

