// screens/RecipeDetailScreen.js

import React from "react";
import { View, Text } from "react-native";

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;

  return (
    <View>
      <Text>{recipe.title}</Text>
      <Text>{recipe.description}</Text>
      {/* Display more details like ingredients and steps */}
    </View>
  );
};

export default RecipeDetailScreen;
