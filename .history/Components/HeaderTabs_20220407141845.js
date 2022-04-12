import React, { useState  } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const HeaderTabs = ({activeTab,setActiveTab }) => {
  // const [activeTab, setActiveTab] = useState("Delivery")
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        
      />
    </View>
  )
}

const HeaderButton = ({ text, btnColor, textColor, activeTab,  setActiveTab}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: activeTab === text ? 'black' : 'white',
          paddingVertical: 6,
          paddingHorizontal: 16,
          borderRadius: 30
        }}
        onPress={() => setActiveTab(text)}
      >
        <Text
          style={{
            color: activeTab === text ? 'white' : 'black',
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
