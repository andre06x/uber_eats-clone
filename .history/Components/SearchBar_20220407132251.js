import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const SearchBar = ({ setCity }) => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#eee",
          borderRadius: 50,
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
            marginTop: 7,
          }}
        />

        <View style={{
          flexDirection: "row",
          marginRight: 8,
          backgroundColor: "#fff",
          padding: 9,
          borderRadius: 30,
          alignItems: "center"
        }}
        >
          <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
          <Text>Search</Text>
        </View>
      </View>
      {/* <GooglePlacesAutocomplete
        // query={{key: "AIzaSyAWA-hoY9GzSivKKDEw0rgxZ35wMQYjFSU"}}
        placeholder="Search"
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0];
          setCity(city);
        }}

        styles={{
          textInput: {

          },
          textInputContainer: {

          }
        }}

        renderLeftButton={() =>

        }

        renderRightButton={() =>

        }
      /> */}
    </View>
  )
}

export default SearchBar;