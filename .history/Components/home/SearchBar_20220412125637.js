import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const SearchBar = ({ setCity }) => {
  const [textCity, setTextCity] = useState("Marica");

  return (
    <View 
      style={{ 
        marginTop: 15, 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between" 
      }}
    >
      <View
        style={{
          backgroundColor: "#eee",
          borderRadius: 50,
          paddingVertical: 5,
          flexDirection: "row",
          alignItems: "center",
          marginRight: 10,
          width: "100%"
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Ionicons name="location-sharp" size={24} />
        </View>
        <TextInput
          style={{
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            flex: 1,
          }}
          onChangeText={(text) => setTextCity(text)}
          value={textCity}
        />

        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginRight: 8,
            backgroundColor: "#fff",
            padding: 7,
            borderRadius: 30,
            alignItems: "center"
          }}
          onPress={() => setCity(textCity)}
        >
          <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      {/* <GooglePlacesAutocomplete
        // query={{key: ""}}
        placeholder="Search"
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0];
          setCity(city);
        }}
      */}
    </View>
  )
}

export default SearchBar;