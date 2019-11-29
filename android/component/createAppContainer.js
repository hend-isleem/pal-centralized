import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ContactUs from "./ContactUs";
import AboutUs from "./About";
import Home from "./Home";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
}

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    ContactUs: ContactUs,
    AboutUs: AboutUs
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#2c87d1"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(AppNavigator);
