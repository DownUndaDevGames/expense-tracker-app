import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/HomeScreen";
import Reports from "../screens/ReportsScreen";
import { init } from "../db";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={Home}
        options={{ title: "Expenses" }}
      />
    </Stack.Navigator>
  );
}
export default function Navigation() {
  useEffect(() => {
    init();
  }, []);
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Reports" component={Reports} />
    </Tab.Navigator>
  );
}
