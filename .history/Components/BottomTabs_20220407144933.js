import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const BottomTabs = () => {
  return (
    <View style={{ flexDirection: "row", margin: 10, marginHorizontal: 30, justifyContent: "space-between" }}>
      <Icon name="home" text="home" />
    </View>
  )
}

const Icon = ({ icon, text }) => {
  <View>
    <FontAwesome5
      name={icon}
      size={25}
      style={{
        marginBottom: 3,
        alignSelf: "center"
      }}
    />
    <Text>{text}</Text>
  </View>

}

export { BottomTabs }