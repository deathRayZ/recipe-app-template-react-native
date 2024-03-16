// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RecipeFeedScreen from "./screens/RecipeFeedScreen";
import RecipeDetailScreen from "./screens/RecipeDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RecipeFeed">
        <Stack.Screen name="RecipeFeed" component={RecipeFeedScreen} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
