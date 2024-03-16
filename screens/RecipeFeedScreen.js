// screens/RecipeFeedScreen.js

import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const recipes = [
  {
    id: "1",
    title: "Pasta Carbonara",
    description: "Classic Italian pasta dish.",
  },
  {
    id: "2",
    title: "Vegetable Stir Fry",
    description: "Healthy and delicious stir fry.",
  },
  // Add more recipe data
];

const RecipeFeedScreen = ({ navigation }) => {
  const renderRecipeItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("RecipeDetail", { recipe: item })}
    >
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipeItem}
      />
    </View>
  );
};

export default RecipeFeedScreen;
