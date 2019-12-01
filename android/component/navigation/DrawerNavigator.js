import React from "react";
// import { View, Text } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";

import Home from "../Home";
import AboutUs from "../About";
import ContactUs from "../ContactUS";

const DrawerNavigator = createDrawerNavigator(
  {
    Home: Home,
    ContactUs: ContactUs,
    AboutUs: AboutUs
  },
  {
    drawerPosition: "left",
    drawerBackgroundColor: "white",
    drawerType: "slide"
  }
);

export default DrawerNavigator;
