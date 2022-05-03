import ListScreen from "./ListScreen";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const Stack = createStackNavigator();
const ListNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
  );
};

export default ListNavigator;
