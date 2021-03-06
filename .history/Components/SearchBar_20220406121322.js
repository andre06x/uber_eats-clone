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
          <View>
            <Ionicons name="location-sharp" size={24} />
          </View>}
      />
    </View>
  )
}

export default SearchBar;