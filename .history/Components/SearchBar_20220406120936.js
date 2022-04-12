import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SearchBar = () => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row"}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee"
          }
        }}
      />
    </View>
  )
}

export default SearchBar;