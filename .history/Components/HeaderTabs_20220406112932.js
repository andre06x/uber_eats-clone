import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from "react-native-web";

// import { Container } from './styles';

const HeaderTabs = () => {
  return (
    <View>
      <HeaderButton />
      <HeaderButton />
    </View>
  )
}

const HeaderButton = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text>Delivery</Text>
      </TouchableOpacity>
    </View>
  )
}
export default HeaderTabs;
