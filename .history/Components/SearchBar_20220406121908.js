import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchBar = () => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10
          }
        }}

        renderLeftButton={() =>
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        }

        renderRightButton={() =>
          <View style={{
            flexDirection: "row",
            marginRight: 8,
            backgroundColor: "#fff"
          }}>
            <AntDesign name="clockcircle" size={11} />>
            <Text>Search</Text>
          </View>}
      />
    </View>
  )
}

export default SearchBar;