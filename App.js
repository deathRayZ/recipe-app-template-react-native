// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecipeFeedScreen from "./screens/RecipeFeedScreen";
import RecipeDetailScreen from "./screens/RecipeDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import CreditScreen from "./screens/CreditScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="RecipeFeed" component={RecipeFeedScreen} />
        <Tab.Screen name="RecipeDetail" component={RecipeDetailScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Credits" component={CreditScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
