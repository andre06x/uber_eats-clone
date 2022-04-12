import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const HeaderTabs = () => {
  return (
    <View style={{flexDirection: "row", alignSelf: "center"}}>
      <HeaderButton text="Delivery"/>
      <HeaderButton text="Pickup"/>
    </View>
  )
}

const HeaderButton = ({text}) => {
  return (
    <View>
      <TouchableOpacity style={{
        backgroundColor: "black",
        paddingVertical: 6,
        paddingHorizontal: 16,
        bordeRadius: 30
      }}>
        <Text style={{color: "#fff"}}
        >{text}</Text>
      </TouchableOpacity>
    </View>
  )
}
export default HeaderTabs;
