import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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
