import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import BottomNavigationWrap from "../basic/BottomNavigation";

const Router = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigationWrap
          navigation={navigation}
          state={state}
          descriptors={descriptors}
          insets={insets}
        />
      )}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Parents",
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="children"
        options={{
          tabBarLabel: "Children",
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-child" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Router;
