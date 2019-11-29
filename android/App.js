import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./component/Home";
import AboutUs from "./component/About";
import AppContainer from "./component/createAppContainer";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
