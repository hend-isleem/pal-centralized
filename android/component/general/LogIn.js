import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import axios from "axios";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableHighlight
} from "react-native";
import { SocialIcon, Card, Input } from "react-native-elements";
export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={styles.cardCnt} title="LogIn Page">
          <Input
            placeholder="  Insert Your Email..."
            leftIcon={<Icon name="user" size={24} color="#cf3c1f" />}
          />
          <Input
            secureTextEntry
            numberOfLines={1}
            placeholder="  Insert Your Password ..."
            leftIcon={<Icon name="lock" size={24} color="#cf3c1f" />}
          />
        </Card>
        <Text style={styles.paragraph}> OR</Text>
        <SocialIcon title="Sign In With google" button type="google" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardCnt: {
    borderWidth: 0, // Remove Border
    shadowColor: "rgba(0,0,0, 0.0)", // Remove Shadow IOS
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    backgroundColor: "#ffffff",

    elevation: 0 // This is for Android
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#ffffff",
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    color: "#cf3c1f",
    textAlign: "center"
  }
});
