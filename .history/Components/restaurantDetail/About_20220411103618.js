import React from "react";
import { View, Text, Image } from 'react-native';

const image = "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"
const title = "Restaurante Doidera";
const description = "Thau . Comfort . $$ . dolar. 4 : (2019+)"

const About = (route) => {
  const { name, image, price, reviews, rating, categories } =
    route.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${price ? " • " + price : ""
    } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
)

const RestaurantTitle = ({ title }) => (
  <Text style={{ fontSize: 29, fontWeight: "700", marginTop: 10, marginHorizontal: 15 }}>
    {title}
  </Text>
)

const RestaurantDescription = ({ description }) => (
  <Text style={{ marginTop: 10, marginHorizontal: 15, fontWeight: "400", fontSize: 15.5 }}>{description}</Text>
)

export default About;