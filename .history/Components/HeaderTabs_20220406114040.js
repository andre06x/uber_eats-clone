import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from "react/cjs/react.production.min";

// import { Container } from './styles';

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery")
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        
      />
    </View>
  )
}

const HeaderButton = ({ text, btnColor, textColor }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: btnColor,
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30
        }}
      >
        <Text
          style={{
            color: textColor,
            fontSize: 15,
            fontWeight: "700"
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
export default HeaderTabs;
