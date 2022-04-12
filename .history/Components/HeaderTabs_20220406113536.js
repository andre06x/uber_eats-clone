import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const HeaderTabs = () => {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton text="Delivery" btnColor="black" textColor="white"/>
      <HeaderButton text="Pickup" btnColor="white" textColor="black"/>
    </View>
  )
}

const HeaderButton = ({ text }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          paddingVertical: 6,
          paddingHorizontal: 16,
          bordeRadius: 30
        }}
      >
        <Text 
          style={{ 
            color: "#fff",
            fontSize: 15,
            fontWeight: "900"
          }}
        >
          {text}</Text>
      </TouchableOpacity>
    </View>
  )
}
export default HeaderTabs;
