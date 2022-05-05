
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ListScreen from "./components/ListScreen";
import MainScreen from "./components/MainScreen";
import ReportScreen from "./components/ReportScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

const AppNavigation = ({}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="main" activeColor="#000000" color="#555555">
        <Tab.Screen
          name="main"
          component={MainScreen}
          options={{
            tabBarLabel: "Térkép",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="map" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="list"
          component={ListScreen}
          options={{
            tabBarLabel: "Hírek",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="newspaper" color={color} size={26}/>
            ),
          }}
        />
        <Tab.Screen
          name="reports"
          component={ReportScreen}
          options={{
            tabBarLabel: "Bejelentés",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="exclamation" color={color} size={26}/>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default (AppNavigation);
