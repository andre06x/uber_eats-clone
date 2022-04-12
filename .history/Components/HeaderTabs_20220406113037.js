import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const HeaderTabs = () => {
  return (
    <View>
      <HeaderButton text="Delivery"/>
      <HeaderButton text="Pickup"/>
    </View>
  )
}

const HeaderButton = ({text}) => {
  return (
    <View>
      <TouchableOpacity>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}
export default HeaderTabs;
